import { Router } from 'express';
import { get } from './status.handler';

export function registerModuleRoutes(router: Router): void {
  router.get('/', get);
} 