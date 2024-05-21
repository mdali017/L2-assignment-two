import { Request, Response } from 'express';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductService.createProductIntoDB(product);
    res.status(200).json({
      success: true,
      message: 'Product is created succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductController = {
  createProduct,
};
