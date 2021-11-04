const express = require('express');
const ProductsService = require('../services/products.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);

  res.status(201).json({
    message: 'created',
    data: newProduct,
  });
});

router.patch('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const product = service.update(id, body);

  res.json({
    message: 'updated',
    data: product,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);

  res.json({
    message: 'deleted',
    product,
  });
});

module.exports = router;
