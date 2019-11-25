export type User = {
  _id: string,
  name: string;
  email: string;
  credit_cards?: Creditcard[];
}

type Creditcard = {
  number: string;
  holder_name: string;
  is_default: boolean;
}