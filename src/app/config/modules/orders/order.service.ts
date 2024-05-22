import { Order } from './order.interface';
import OrderModel from './order.model';

// create an order
const createAnOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

// create an order
const getAllOrderFromDB = async (filter: { email?: string }) => {
  const result = await OrderModel.find(filter);
  return result;
};

export const OrderService = {
  createAnOrderIntoDB,
  getAllOrderFromDB,
};
