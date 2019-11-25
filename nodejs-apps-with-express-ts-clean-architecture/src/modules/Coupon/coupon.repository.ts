import { mongoClient } from '../../libs/database';
import { ApplyCouponRequest, ApplyCouponResponse } from './coupon.types';
import { find } from './coupon.querybuilder';

export async function apply (payload: ApplyCouponRequest): Promise<ApplyCouponResponse> {
  const Coupons = mongoClient.collection('coupons');
  if (!payload.coupon) {
    console.log('Coupon not provided');
    return { products: payload.products }
  };
  const coupon = await Coupons.findOne(find(payload.coupon));

  if (!coupon) {
    console.log('Coupon not found');
    return { products: payload.products }
  }

  const products = payload.products.map(product => {
    if (product.type !== coupon.valid_for) return { ...product };
    const finalPrice = product.price - (product.price * (coupon.amount / 100))
    return {
      ...product,
      price: finalPrice
    }
  });

  return { products };
}