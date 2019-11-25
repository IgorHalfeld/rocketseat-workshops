import { Product } from '../Product/product.types';
import { User } from '../User/user.types';
import { ObjectId } from 'mongodb';

export type PayRequest = {
  products: Product[],
  user: User,
}

export type Order = {
  user: User,
  items: Item[],
  amount: number,
  created_at: Date,
}

type Item = {
  id: ObjectId,
}

export type CreateOrderRequest = {
  user: User,
  products: Product[],
}

