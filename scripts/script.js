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

console.log("-----------------------");

/// 2 способ   ///

let data = [1, 2, 3, 4, 5, 6];

console.log(data);

let data1 = data.filter(function (value) {
  return value % 2 == 0;
});

console.log(data1);

console.log("-----------------------");

/// Задача № 2 ////

function copy(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  };
  return result;
};

const list = [1, 2, 3, 4, 5, 6, 7];
const newL = copy(list, (value) => value * 10);

console.log(list);
console.log(newL);
console.log("-----------------------");
console.log(copy(list, (value) => value * 10),);
console.log(copy(list, (value) => value));
console.log(copy(list, (value) => value * 2));

console.log("-----------------------");

// 2 способ ///

const array1 = [ 8, 9, 10, 11, 12, 13, 14];


function copy(list, cb = mul10) {
    const newArray = [];

    for (let i = 0; i < list.length; i++) {
        newArray[newArray.length] = cb(list[i]);
    };
    return newArray;
};

let mul10 = (value) => value * 10; 

console.log(copy(array1));

console.log("-----------------------");

////// 3 способ ///

let data3 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(data3);

let data4 = data3.map(function (value1) {
  return value1 * 10;
});

console.log(data4);