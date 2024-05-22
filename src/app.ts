import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/config/modules/products/product.route';
import { OrderRoute } from './app/config/modules/orders/order.route';
import { error } from 'console';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/products', productRouter);
app.use('/api/order', OrderRoute);

// Not Found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: 'Route not found',
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Assignment Two.!');
});

export default app;
