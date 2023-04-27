///// Створюємо функцію факторіал ////

function factorial(n) {
    if (n <= 1) {
      return 1;
    };
  
    return n * factorial(n - 1);
};

///// Покращимо таку реалізацію, шляхом кешування обчислень ////

function cachebleProcess(cbFactorial) {
    const cache = {};
  
    return function (...args) {
      const key = args.join(',');
  
        if (key in cache) {
          console.log(`Receive value from cache - ${cache[key]}`);
          return cache[key];
        };
  
      const result = cbFactorial(...args);
      console.log(`Calculate -  ${result}`);
      cache[key] = result;
  
      return result;
    };
};

const memoFactorial = cachebleProcess(factorial);

console.log(memoFactorial(3));

console.log(memoFactorial(3));

console.log(memoFactorial(10));

console.log(memoFactorial(10));