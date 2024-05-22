import { Request, Response } from 'express';
import { OrderService } from './order.service';
import OrderValidationSchema from './order.validation';

// create an order
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const { error, value } = OrderValidationSchema.validate(order);

    if (error) {
      res.status(500).json({
        success: true,
        message: 'Something went wrong !',
        error: error.details,
      });
    }

    const result = await OrderService.createAnOrderIntoDB(order);

    res.status(200).json({
      success: true,
      message: 'Order create successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// get all order
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const filter = email ? { email: email as string } : {};

    const result = await OrderService.getAllOrderFromDB(filter);
    res.status(200).json({
      success: true,
      message: 'All Order Retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Order not found',
    });
  }
};

// // get order item using email
// const

export const OrderControllers = {
  createOrder,
  getAllOrder,
};
