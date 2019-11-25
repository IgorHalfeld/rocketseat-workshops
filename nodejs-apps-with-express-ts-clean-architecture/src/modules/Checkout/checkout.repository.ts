import { apply } from '../Coupon/coupon.repository';
import { findOne } from '../Product/product.repository';
import { CreateRequest } from './checkout.types';
import { pay } from '../Payment/payment.repository';
import { Order } from '../Payment/payment.types';

export async function create(payload: CreateRequest): Promise<Order|null> {
  const products = [];

  for (const item of payload.items) {
    const product = await findOne(item._id);
    products.push(product);
  }

  const { products: productWithDiscount } = await apply({
    coupon: payload.coupon,
    products,
  });

  const Order = await pay({
    products: productWithDiscount,
    user: {
      _id: '',
      ...payload.user,
    },
  });

  return Order;
}