//// Задача №1 /////

function filterArr(arr, callback) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArr.push(arr[i]);
    };
  };

  return filteredArr;
};

function isEven(x) { return x % 2 == 0; };

const input = [1, 2, 3, 4, 5, 6];

console.log(filterArr(input, isEven));

console.log("-----------------------")

/// 2 способ   через второй массив ///

let data = [1, 2, 3, 4, 5, 6];

let data1 = data.filter(function (value) {
  return value % 2 == 0;
});

console.log(data);
console.log(data1);

/// Задача № 2 ////

