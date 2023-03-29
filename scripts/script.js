let n = parseInt(prompt('Введіть  розмір(length) масиву '));

while (isNaN(n) || n < 1) {
  n = parseInt(prompt("Введено некорректне значення, спробуйте ввести валідне значення."));
};

console.log ("array length " + n) ;

const arr_1 = [] ;

for (let i = 0; i < n ; i++) {
  let val_1 = parseInt(prompt('Введіть значення для елементів масиву'));

  while (isNaN(val_1) || val_1 < 0) {
    val_1 = parseInt(prompt("Введено некорректне значення, спробуйте ввести валідне значення."));
  }

  arr_1[i] = val_1 ;
};

console.log (arr_1) ;


