// Функція для отримання параметрів пошуку від користувача
function getSearchCriteria() {
  const title = prompt("Enter product title");
  const minPrice = parseFloat(prompt("Enter minimum price"));
  const maxPrice = parseFloat(prompt("Enter maximum price"));
  const rating = parseFloat(prompt("Enter minimum rating"));

  return { title, minPrice, maxPrice, rating };
};

// Функция для получения данных с сервера
const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};

// Функция для фильтрации продуктов
function filterProducts(products, searchCriteria) {
  return products.filter((product) => {
    const { title, minPrice = 0, maxPrice = 0, rating = 0 } = searchCriteria;//// по умолчанию был 0/// 

    // Преобразуем заголовок продукта и поисковый заголовок к нижнему регистру и удаляем пробелы
    const formattedTitle = title ? title.toLowerCase().replace(/\s/g, "") : "";

    if (
      (formattedTitle && !product.title.toLowerCase().replace(/\s/g, "").includes(formattedTitle)) ||
      (minPrice !== 0 && product.price < minPrice) ||
      (maxPrice !== 0 && product.price > maxPrice) ||
      (rating !== 0 && (!product.rating || product.rating < rating))
    ) {
      return false;
    }
    return true;
  });
};

// Функция для создания div с изображением продукта
function getImageDiv(thumbnail) {
  return `
    <div class="image-wrapper">
      <img src="${thumbnail}" alt="" class="image"/>
    </div>`;
};

// Функция для создания блока с заголовком продукта
function getProductTitle(title) {
  return `
    <div class="title">
      <h4>${title}</h4>
    </div>
  `;
};

// Функция для расчета цены со скидкой
function getPriceWithDiscount(price, discountPercentage) {
  const percent = 100;
  return price * (percent - discountPercentage) / percent;
};

// Функция для создания блока с ценой продукта
function getProductPrice(price, discountPercentage) {
  const priceWithDiscount = getPriceWithDiscount(price, discountPercentage);
  return `${price}, price with discount: ${priceWithDiscount.toFixed(2)}`;
};

// Функция для создания блока с описанием продукта
function getProductDescription(description) {
  return `<div class="description">${description}</div>`;
};

// Функция для создания блока с кнопками
function getActionsDiv() {
  return `
    <div class="actions">
      <button id="cart" class="button green-solid cart">Add to Cart</button>
      <button class="button more">More Details</button>
    </div>
  `;
};

// Функция для создания HTML-разметки продукта
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

// Функция для создания HTML-разметки всех продуктов
function getProductsTemplate(products) {
  if (products.length === 0) {
    return "<p>No products found.</p>";
  }
  const productElements = products.map((product) => createProductElement(product));
  return `
    <article class="products">
      ${productElements.join("")}
    </article>
  `;
};

// Главная функция, которая отображает все продукты на странице
async function getAllProducts() {
  const searchCriteria = getSearchCriteria(); // Получаем поисковые критерии от пользователя

  if (!searchCriteria.title && !searchCriteria.minPrice && !searchCriteria.maxPrice && !searchCriteria.rating) {
    alert("Please enter at least one search criteria");
  }

  // Запрашиваем продукты с сервера
  const response = await fetchAllProducts();
  const products = response.products;

  let filteredProducts = products;

  if (searchCriteria.title || searchCriteria.minPrice || searchCriteria.maxPrice || searchCriteria.rating) {
    // Фильтруем продукты по критериям только если есть заполненные критерии поиска
    filteredProducts = filterProducts(products, searchCriteria);
  }

  // Создаем HTML-разметку для продуктов
  const productsTemplate = getProductsTemplate(filteredProducts);
  document.body.innerHTML = productsTemplate; // Отображаем продукты на странице
};


// Запускаем функцию для отображения всех продуктов 
getAllProducts();