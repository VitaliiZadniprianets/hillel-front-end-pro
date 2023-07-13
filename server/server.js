const express = require('express');
const app = express();
const port = 3000;
const data = require('./data.json');

// Стратегия фильтрации по наличию
const filterByStock = (isStock) => (product) => product.productStock === isStock;

// Стратегия фильтрации по ценовому диапазону
const filterByPriceRange = (minPrice, maxPrice) => (product) => {
  const price = parseFloat(product.productPrice);
  return price >= minPrice && price <= maxPrice;
};

app.get('/products', (req, res) => {
  const { query } = req;

  const filteredProducts = data
    .filter((product) => {
      if (query.stock) {
        const isStock = query.stock === 'true';
        return filterByStock(isStock)(product);
      }
      return true;
    })
    .filter((product) => {
      if (query.minPrice && query.maxPrice) {
        const minPrice = parseFloat(query.minPrice);
        const maxPrice = parseFloat(query.maxPrice);
        return filterByPriceRange(minPrice, maxPrice)(product);
      }
      return true;
    });

  res.json(filteredProducts);
});

app.get('/products/search', (req, res) => {
  const { query } = req;
  const productName = query.productName.toLowerCase();

  const matchingProducts = data.filter(
    (product) => product.productName.toLowerCase().includes(productName)
  );

  res.json(matchingProducts);
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = data.find((product) => product.productId === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
