import { Router } from 'express';
import { create } from './checkout.handler';

export function registerModuleRoutes(router: Router): void {
  router.post('/checkout', create);
} 