// Функція для збільшення лічильника
function incrementCounter(blockId) {
  const counterElement = document
    .getElementById(blockId)
    .querySelector('.counter');
  let counterValue = parseInt(counterElement.value);
  counterValue++;
  counterElement.value = counterValue;
  saveCounter(blockId, counterValue);
};

// Функція для збереження значення лічильника в localStorage
function saveCounter(blockId, counterValue) {
  localStorage.setItem(blockId, counterValue);
};

// Функція для отримання значення лічильника з localStorage
function getCounter(blockId) {
  let counterValue = localStorage.getItem(blockId);
  if (counterValue === null) {
    counterValue = 0;
  } else {
    counterValue = parseInt(counterValue);
  }
  return counterValue;
};

// Функція для встановлення значення лічильника
function setCounter() {
  const blockId = prompt('Введіть id блоку:');
  const counterValue = parseInt(prompt('Введіть значення лічильника:'));
  const counterElement = document
    .getElementById(blockId)
    ?.querySelector('.counter');
  if (counterElement) {
    counterElement.value = counterValue;
    saveCounter(blockId, counterValue);
  } else {
    alert('Блок з таким id не знайдений.');
  }
};

// Функція для скидання всіх лічильників
function clearCounters() {
  const counterElements = document.querySelectorAll('.counter');
  counterElements.forEach((counterElement) => {
    const blockId = counterElement.parentNode.id;
    counterElement.value = 0;
    saveCounter(blockId, 0);
  });
};

// Функція для налаштування обробників подій кнопок
function setupEventHandlers() {
  const block1Button = document.getElementById('block1').querySelector('.click-button');
  const block2Button = document.getElementById('block2').querySelector('.click-button');
  const clearButton = document.getElementById('clear-button');
  const setButton = document.getElementById('set-button');

  block1Button.addEventListener('click', function() {
    incrementCounter('block1');
  });

  block2Button.addEventListener('click', function() {
    incrementCounter('block2');
  });

  clearButton.addEventListener('click', clearCounters);
  setButton.addEventListener('click', setCounter);
};

// Функція для початкового встановлення значень лічильників при завантаженні сторінки
function start() {
  const counterElements = document.querySelectorAll('.counter');
  counterElements.forEach((counterElement) => {
    const blockId = counterElement.parentNode.id;
    const counterValue = getCounter(blockId);
    counterElement.value = counterValue;
  });
};

// Виклик функції налаштування обробників подій
setupEventHandlers();

// Виклик функції початкового встановлення значень лічильників
start();