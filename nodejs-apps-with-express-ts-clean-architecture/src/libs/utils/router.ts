import express, { Express, Router } from 'express';
import { Module } from './sharedTypes';

const router: Router = express.Router();

export function setUpModules(modules: Module[], app: Express): void {
  for (const module of modules) {
    module.registerModuleRoutes(router);
  }
  app.use(router);
}