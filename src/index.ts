import { AppDataSource } from "./data-source";
import express, { Express } from 'express';
import router from './routes/router';

const PORT = 3000;

AppDataSource.initialize().then(async () => {
  const app: Express = express();

  app.use('/', router);

  app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
  });

}).catch(error => console.log('TypeORM connection error: ', error))
