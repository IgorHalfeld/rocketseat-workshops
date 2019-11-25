import { mongoClient } from '../../libs/database';
import { Product } from './product.types';
import {
  findOne as findOneQuery,
  updateStock as updateStockQuery
} from './product.querybuilder';

export async function findOne(_id: string): Promise<Product> {
  const Product = mongoClient.collection('products');
  const res = await Product.findOne(findOneQuery(_id));
  return res;
}

export async function updateStock(_id: string, stock: number): Promise<void> {
  const Product = mongoClient.collection('products');
  await Product.findOneAndUpdate(findOneQuery(_id), updateStockQuery(stock));
};