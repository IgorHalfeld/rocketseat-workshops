import { Request, Response } from 'express';
import { create as createCheckout } from './checkout.repository';
import { CreateRequest } from './checkout.types';
import { validateCreate } from './checkout.validators';

export function create(req: Request, res: Response): void {
  const payload: CreateRequest = req.body;
  const errorResponse = validateCreate(payload);
  if (errorResponse) {
    res.status(400).json(errorResponse);
    return;
  }
  const order = createCheckout(payload);

  if (!order) {
    res.status(500).json({ message: 'error occurred when order was created' });
    return;
  }
  res.status(201).json({ message: 'order created' });
}
