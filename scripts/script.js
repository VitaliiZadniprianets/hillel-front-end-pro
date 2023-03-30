let n = parseInt(prompt('Введіть  розмір(length) масиву '));

if (n !== null) {

  while (isNaN(n) || n < 1) {
    n = parseInt(prompt("Введено некорректне значення, спробуйте ввести валідне значення."));
  };
};

console.log ("array length " + n) ;

const A = [];
  
// Определяем мин //
let minVal = parseInt(prompt('Введіть мінімальне значення для елементів масиву'));

if (minVal !== null) { 

  while (isNaN(minVal)) {
    minVal = parseInt(prompt("Введено некорректне значення, спробуйте ввести валідне значення."));
  };
};
 
console.log("Мінімальне значення для елементів масиву з іменем A = " + minVal );

minVal = +minVal;

// Определяем макс //

let maxVal = parseInt(prompt('Введіть максимальне значення для елементів масиву'));

if (maxVal !== null) { 

  while (isNaN(maxVal)) {
    minVal = parseInt(prompt("Введено некорректне значення, спробуйте ввести валідне значення."));
  };
};
 
console.log("Максимальне значення для елементів масиву з іменем A = " + maxVal );

maxVal = +maxVal;

// Избежания ошибки юзера , когда мин больше макс //

if (maxVal < minVal ) {
  let temp = maxVal ;
  maxVal = minVal ;
  minVal = temp ;

  alert ("Мінімальне значення не може бути більше максимального, тому ваші значення приведені у відповідність з умовами")

  console.log("Мінімальне значення для елементів масиву з іменем A = " + minVal );
  console.log("Максимальне значення для елементів масиву з іменем A = " + maxVal );
};

