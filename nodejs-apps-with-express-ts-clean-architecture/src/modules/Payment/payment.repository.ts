import { mongoClient } from '../../libs/database';
import { sendSuccessEmail, sendFailureEmail } from '../../libs/email';
import { PayRequest, CreateOrderRequest, Order } from './payment.types';
import { createOrder as createOrderQuery } from './payment.querybuilder';
import { findOne as findOneUser } from '../User/user.repository';
import { updateStock } from '../Product/product.repository';

export async function pay(payload: PayRequest): Promise<Order|null> {
  const user = await findOneUser(payload.user._id);
  
  const order = createOrder({ user, products: payload.products });
  if (!order) return null;

  for (const product of payload.products) {
    await updateStock(product._id.toHexString(), product.stock);
    console.log(`${product.name} - stock updated`);
  }
  return order;
}

export async function createOrder(payload: CreateOrderRequest): Promise<Order|null> {
  const Payment = mongoClient.collection('payments');
  const creditCards = payload.user.credit_cards && Array.isArray(payload.user.credit_cards)
    ? payload.user.credit_cards
    : [];

  const creditCard = creditCards.find(card => card.is_default) || { number: 0 };
  const totalAmount = payload.products.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  const order: Order = {
    created_at: new Date(),
    items: payload.products.map(product => ({ id: product._id })),
    user: payload.user,
    amount: totalAmount,
  };


  const response = await Payment.insertOne(createOrderQuery(order));

  const message = `
    Bought ${payload.products.length} - ${totalAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    -------------------------------
    Credit Card: ${creditCard.number}
  `;

  if (response.insertedId) sendSuccessEmail(payload.products, payload.user, message)
  else sendFailureEmail(payload.products, payload.user, message)

  return response.insertedCount ? order : null;
}