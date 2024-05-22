// export type Order = {
//     email: string;
//     productId: string;
//     price: number;
//     quantity: number;
// }

import mongoose from 'mongoose';

export type Order = {
  email: string;
  productId: mongoose.Schema.Types.ObjectId;
  price: number;
  quantity: number;
} & mongoose.Document;
