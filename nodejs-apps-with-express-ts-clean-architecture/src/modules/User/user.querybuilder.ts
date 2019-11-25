import { ObjectID } from 'mongodb';

export function findOne(_id: string) {
  return { _id: new ObjectID(_id.trim()) };
}