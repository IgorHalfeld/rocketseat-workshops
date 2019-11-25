import express, { Express, Router } from 'express';
import { registerAllMiddlewares } from './middlewares';
import { Module } from './libs/utils/sharedTypes';
import { setUpModules } from './libs/utils/router';

import * as Status from './modules/Status/status.routes';
import * as Checkout from './modules/Checkout/checkout.routes';

const app: Express = express();

const PORT: number = Number(process.env.PORT) || 3000;

const modules: Module[] = [
  Status,
  Checkout,
];

async function runApplication(): Promise<void> {
  registerAllMiddlewares(app);
  setUpModules(modules, app);

  app.listen(PORT, (): void => {
    console.log(`* App running at http://localhost:${PORT}`);
  });
}

runApplication();