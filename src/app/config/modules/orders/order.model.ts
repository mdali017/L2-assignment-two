import mongoose, { Schema, model } from 'mongoose';
import { Order } from './order.interface';

const orderSchema = new Schema<Order>({
  email: { type: String, required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const OrderModel = model<Order>('Order', orderSchema);
export default OrderModel;
