import { Express } from 'express';
import bodyParser from 'body-parser';

export function registerAllMiddlewares(app: Express): void {
  app.use(bodyParser.json());
};