import Joi from 'joi';

const ProductValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Name cannot be empty',
    'any.required': 'Name is required',
  }),
  description: Joi.string().required().messages({
    'string.empty': 'Description cannot be empty',
  }),
  price: Joi.number().required().min(0).messages({
    'any.required': 'Price is required',
    'number.min': 'Price should be a positive number',
  }),
  category: Joi.string().required().messages({
    'any.required': 'Category is required',
  }),
});

export default ProductValidationSchema;
