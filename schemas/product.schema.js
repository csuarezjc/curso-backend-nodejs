const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(15);
const price = joi.number().integer().min(10);
const description = joi.string().min(10);
const image = joi.string().uri();
const categoryId = joi.number().integer();

const price_min = joi.number().integer().min(10);
const price_max = joi.number().integer().min(10);

const limit = joi.number().integer();
const page = joi.number().integer();

const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = joi.object({
  name,
  price,
  description,
  image,
  categoryId,
});

const getProductSchema = joi.object({
  id: id.required(),
});

const queryProductSchema = joi.object({
  limit,
  page,
  price,
  price_min,
  price_max: price_max.when('price_min', {
    is: joi.number().integer(),
    then: joi.required(),
  }),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema,
};
