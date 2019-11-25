import { ObjectID } from 'mongodb';

interface Meta {
  color: string;
  SSD: string;
  RAM: string;
}

export interface Product {
  _id: ObjectID;
  name: string;
  type: string;
  price: number;
  stock: number;
  meta: Meta;
}