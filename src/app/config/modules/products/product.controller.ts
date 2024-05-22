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

// get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products are retrieved succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get single products
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    // console.log(productId);
    const result = await ProductService.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product is retrieved succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// update a single product
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedProductData = req.body;

    const result = await ProductService.updateAProductFromDB(
      productId,
      updatedProductData,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// delete a product
const deleteAProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    console.log(productId);
    const result = await ProductService.deleteAProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteAProduct,
};
