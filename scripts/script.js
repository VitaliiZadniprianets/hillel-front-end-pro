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

// Определяем макс //

let maxVal = parseInt(prompt('Введіть максимальне значення для елементів масиву'));

if (maxVal !== null) { 

  while (isNaN(maxVal)) {
    minVal = parseInt(prompt("Введено некорректне значення, спробуйте ввести валідне значення."));
  };
};
 
console.log("Максимальне значення для елементів масиву з іменем A = " + maxVal );

// Избежания ошибки юзера , когда мин больше макс //

if (maxVal < minVal ) {
  let temp = maxVal ;
  maxVal = minVal ;
  minVal = temp ;

  alert ("Мінімальне значення не може бути більше максимального, тому ваші значення приведені у відповідність з умовами")

  console.log("Мінімальне значення для елементів масиву з іменем A = " + minVal );
  console.log("Максимальне значення для елементів масиву з іменем A = " + maxVal );
};

for (let i = 0; i < n; i++) {
  A[i] = Math.round(Math.random() * (maxVal - minVal) + minVal); 
};

console.log(A);

// сортировка от меньшего к большему  //
A.sort(function (a, b) {
  return a - b;
});

console.log(A, "Відсортований массив A");
 
const min = A[0];
const max = A[n - 1];

console.log(min, 'Мінімальне значення массиву A');
console.log(max, 'Максимальне значення массиву A');

const B = A.slice(1, n - 1);

console.log(B, 'Новий массив B  з елементи  між min та max ');