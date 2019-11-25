type UserRequest = {
  id: string,
  name: string,
  email: string,
}
type ItemRequest = {
  _id: string
}

export type CreateRequest = {
  user: UserRequest,
  coupon: string,
  items: ItemRequest[],
}

export type ErrorRequest = {
  message: string
}
