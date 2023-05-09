// Функція для отримання параметрів пошуку від користувача
function getSearchCriteria() {
  const title = prompt("Enter product title") || "";
  const minPrice = parseFloat(prompt("Enter minimum price")) || 0;
  const maxPrice = parseFloat(prompt("Enter maximum price")) || 0;
  const rating = parseFloat(prompt("Enter minimum rating"))  || 0;

  return { title, minPrice, maxPrice, rating };
};

// Функція для отримання даних з сервера
const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};

// Об'єкт з функціями фільтрації
const filters = {
  title: (product, searchCriteria) => {
    const { title } = searchCriteria;
    if (title) {
      const formattedTitle = title.toLowerCase().replace(/\s/g, "");
      return product.title.toLowerCase().replace(/\s/g, "").includes(formattedTitle);
    };
    return true;
  },
  minPrice: (product, searchCriteria) => {
    const { minPrice } = searchCriteria;
    return minPrice !== 0 ? product.price >= minPrice : true;
  },
  maxPrice: (product, searchCriteria) => {
    const { maxPrice } = searchCriteria;
    return maxPrice !== 0 ? product.price <= maxPrice : true;
  },
  rating: (product, searchCriteria) => {
    const { rating } = searchCriteria;
    return rating !== 0 ? product.rating >= rating : true;
  },
};

// Функція для фільтрації продуктів
function filterProducts(products, searchCriteria) {
  return products.filter((product) => {
    return Object.keys(searchCriteria).every((filterKey) => {
      const filterFn = filters[filterKey];
      return filterFn(product, searchCriteria);
    });
  });
};

// Функція для сортування за рейтингом
function sortProductsByRating(products) {
  return products.sort((a, b) => b.rating - a.rating);
};

// Функція для створення div з зображенням продукту
function getImageDiv(thumbnail) {
  return `
    <div class="image-wrapper">
      <img src="${thumbnail}" alt="" class="image"/>
    </div>`;
};

// Функція для створення блоку з заголовком продукту
function getProductTitle(title) {
  return `
    <div class="title">
      <h4>${title}</h4>
    </div>
  `;
};

// Функція для розрахунку ціни зі знижкою
function getPriceWithDiscount(price, discountPercentage) {
  const percent = 100;
  return price * (percent - discountPercentage) / percent;
};

// Функція для створення блоку з ціною продукту
function getProductPrice(price, discountPercentage) {
  const priceWithDiscount = getPriceWithDiscount(price, discountPercentage);
  return `${price}, price with discount: ${priceWithDiscount.toFixed(2)}`;
};

// Функція для створення блоку з описом продукту
function getProductDescription(description) {
  return `<div class="description">${description}</div>`;
};

// Функція для створення блоку з кнопками
function getActionsDiv() {
  return `
    <div class="actions">
      <button id="cart" class="button green-solid cart">Add to Cart</button>
      <button class="button more">More Details</button>
    </div>
  `;
};

// Функція для створення HTML-розмітки продукту
function createProductElement(product) {
  return `
    <section class="product-item">
      ${getImageDiv(product.thumbnail)}
      <div class="content-wrapper">
        ${getProductTitle(product.title)}
        <div class="price">
          ${getProductPrice(product.price, product.discountPercentage)}
        </div>
        ${getProductDescription(product.description)}
        ${getActionsDiv()}
      </div>
    </section>
  `;
};

// Функція для створення HTML-розмітки всіх продуктів
function getProductsTemplate(products) {
  const message = products.length === 0 ? "<p>No products found.</p>" : "";
  const productElements = products.map((product) => createProductElement(product));
  return `
    <article class="products">
      ${message}
      ${productElements.join("")}
    </article>
  `;
};

// Головна функція, яка відображає всі продукти на сторінці
async function getAllProducts() {
  const searchCriteria = getSearchCriteria(); // Отримуємо критерії пошуку від користувача

  // Отримуємо дані з сервера
  const response = await fetchAllProducts();
  const products = response.products;

  let filteredProducts = products;

  if (searchCriteria.title || searchCriteria.minPrice || searchCriteria.maxPrice || searchCriteria.rating) {
    // Фільтруємо продукти за критеріями, лише якщо є заповнені критерії пошуку
    filteredProducts = filterProducts(products, searchCriteria);
  };

  // Сортуємо продукти за рейтингом
  filteredProducts = sortProductsByRating(filteredProducts);

  // Створюємо HTML-розмітку для продуктів
  const productsTemplate = getProductsTemplate(filteredProducts);
  document.body.innerHTML = productsTemplate; // Відображаємо продукти на сторінці
};

// Запускаємо функцію для відображення всіх продуктів
getAllProducts();