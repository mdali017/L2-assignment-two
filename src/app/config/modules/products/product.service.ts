import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async (searchTerm: string | any) => {
  // const result = await ProductModel.find(searchTerm);
  // return result;

  if (searchTerm) {
    return await ProductModel.find({
      name: { $regex: new RegExp(searchTerm, 'i') },
    });
  } else {
    return await ProductModel.find();
  }
};

const getSingleProductFromDB = async (id: string) => {
  // const result = await ProductModel.findOne({ id });
  const result = await ProductModel.findById(id);
  return result;
};

const deleteAProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

const updateAProductFromDB = async (id: string, updateProductData: Product) => {
  const result = await ProductModel.findByIdAndUpdate(id, updateProductData);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateAProductFromDB,
  deleteAProductFromDB,
};
