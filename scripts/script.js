///// Задача  №1 /////

function reverseSomeRow (n) {
if (n <= 0) {
    return;
} else {
console.log(n);
return reverseSomeRow(n - 1);
  };
};

reverseSomeRow(5);
console.log("--------------------------");

///// Задача №2 //////

function sumToArray (arr) {
  if (arr.length === 1 ) {
    return arr[0]; 
  };
  const sum = arr.shift() + sumToArray(arr);
    return sum;
};

/*function sumToArray (arr) {
  if (arr.length === 1 ) {
    return arr[0]; 
  };
  const sum = arr[0] + sumToArray(arr.slice(1));
  return sum;
};*/

console.log (sumToArray([1, 2, 3]));
console.log("--------------------------");

////// Задача №3 ///////

function factorial (n) {
    if (n === 0 ) {
      return 1 ;
    };
    return n * factorial(n - 1) ;
};

console.log(factorial(5));