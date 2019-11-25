import { Product } from '../Product/product.types';

export type ApplyCouponRequest = {
  coupon: string,
  products: Product[]
}

export type ApplyCouponResponse = {
  products: Product[]
}

export interface Coupon {
  name: string;
  valid_for: string;
  amount: string;
}