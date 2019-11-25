import { Request, Response } from 'express';

export function get(req: Request, res: Response): void {
  res.status(200).send('Everything is working 🔥');
}