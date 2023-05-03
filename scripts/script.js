// Функция для получения данных с сервера
const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};

// Главная функция, которая отображает все продукты на странице
async function getAllProducts() {
  const response = await fetchAllProducts();  // Запрашиваем продукты с сервера
  const products = response.products;         // Получаем массив продуктов из ответа

// Вспомогательные функции для создания отдельных элементов продукта

// Функция для создания div с изображением продукта
  function getImageDiv (thumbnail) {
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
  function getPriceWithDiscount (price , discountPercentage) {
    const percent = 100;
    return price * (percent - discountPercentage) / percent
  };

   // Функция для создания блока с ценой продукта (включая цену со скидкой, если она есть у продукта)
  function getProductPrice (price, discountPercentage) {
    const priceWithDiscount = getPriceWithDiscount(price, discountPercentage);
    return `${price}, price with discount  ${priceWithDiscount.toFixed(2)}`;
  };

  // Функция для создания блока с описанием продукта
  const getProductDescription = (description) => {
    return `<div class="description">${description}</div>`;
  };

  // Функция для создания блока с кнопками
  const getActionsDiv = () => {
    return `
      <div class="actions">
        <button id="cart" class="button green-solid cart">Add to Cart</button>
        <button class="button more">More Details</button>
      </div>
    `;
  };

  // Функция для создания HTML-разметки продукта на основе всех его свойств
  const createProductElement = (product) => {
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


// Функция для создания HTML-разметки всех продуктов из массива и всех их данных
  function getProductsTemplate(products) {
    return `
   <article class="products">
        ${products.map((product) => createProductElement(product)).join('')}
   </article>`;
  };

  // Вставляем полученную HTML-разметку всех продуктов для отображения 
  document.body.innerHTML = getProductsTemplate(products);
};

//Запускаем функцию для отображения всех продуктов 
getAllProducts();