const express = require('express');
const app = express();
const data = require('./data.json');

const filterByStock = (isStock) => (product) => product.productStock === isStock;

const filterByPriceRange = (minPrice, maxPrice) => (product) => {
  const price = parseFloat(product.productPrice);
  return price >= minPrice && price <= maxPrice;
};

const filterByProductName = (productName) => (product) =>
  product.productName.toLowerCase().includes(productName.toLowerCase());
  
const findProductById = (productId) => (product) => product.productId === productId;

app.get('/products', (req, res) => {
  const { query } = req;

  const filteredProducts = data
    .filter(query.stock ? filterByStock(query.stock === 'true') : () => true)
    .filter(
      query.minPrice && query.maxPrice
        ? filterByPriceRange(
            parseFloat(query.minPrice),
            parseFloat(query.maxPrice)
          )
        : () => true
    );

  res.json(filteredProducts);
});

app.get('/products/search', (req, res) => {
  const { query } = req;
  const productName = query.productName.toLowerCase();

  const matchingProducts = data.filter(filterByProductName(productName));

  res.json(matchingProducts);
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = data.find(findProductById(productId));

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});