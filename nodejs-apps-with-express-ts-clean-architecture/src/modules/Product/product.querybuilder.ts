import { ObjectID } from 'mongodb';

export function findOne(coupon: string) {
  return { _id: new ObjectID(coupon.trim()) };
}
export function updateStock(stock: number) {
  return { $set: { stock } };
}