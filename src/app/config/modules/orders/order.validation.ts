import Joi from 'joi';

const OrderValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Email cannot be empty',
    'string.email': 'Invalid email format',
  }),
  productId: Joi.string().required().messages({
    'any.required': 'Product ID is required',
  }),
  price: Joi.number().required().min(0).messages({
    'any.required': 'Price is required',
    'number.min': 'Price should be a positive number',
  }),
  quantity: Joi.number().required().min(1).messages({
    'any.required': 'Quantity is required',
    'number.min': 'Quantity should be a positive number',
  }),
});

export default OrderValidationSchema;
