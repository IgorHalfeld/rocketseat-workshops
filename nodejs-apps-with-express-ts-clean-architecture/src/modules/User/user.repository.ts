import { User } from './user.types';
import { mongoClient } from '../../libs/database';
import { findOne as findOneQuery } from './user.querybuilder';

export async function findOne(_id: string): Promise<User> {
  const User = mongoClient.collection('users');
  const res = await User.findOne(findOneQuery(_id));
  return res;
}