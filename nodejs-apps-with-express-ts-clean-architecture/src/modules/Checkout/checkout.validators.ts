import { CreateRequest, ErrorRequest } from './checkout.types';

export function validateCreate (payload: CreateRequest): ErrorRequest | null {
  const error: ErrorRequest = { message: '' };

  if (!payload.items || !payload.items.length) {
    error.message = 'needs at least 1 item';
    return error;
  }

  for (const item of payload.items) {
    if (!item._id) {
      error.message = 'items inside payload should have an id';
      return error;
    }
  }

  return null;
}