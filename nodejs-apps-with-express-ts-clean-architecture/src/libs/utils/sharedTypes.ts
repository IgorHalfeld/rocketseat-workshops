import { Router } from 'express';

export interface Module {
  registerModuleRoutes(router: Router): void,
}