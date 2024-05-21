import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/config/modules/products/product.route';
const app: Application = express();
const port = 3000;

// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/products', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Assignment Two.!');
});

export default app;
