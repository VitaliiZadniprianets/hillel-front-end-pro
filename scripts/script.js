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

let data1 = data.filter(function (value2) {
  return value2 % 2 == 0;
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
const newL = copy(list, (value3) => value3 * 10);

console.log(list);
console.log(newL);
console.log("-----------------------");
console.log(copy(list, (value3) => value3 * 10),);
console.log(copy(list, (value3) => value3));
console.log(copy(list, (value3) => value3 * 2));

console.log("-----------------------");

// 2 способ ///

const array1 = [ 8, 9, 10, 11, 12, 13, 14];

let mul10 = (value1) => value1 * 10; 

function copy1(list, cb = mul10) {
    const newArray = [];

    for (let i = 0; i < list.length; i++) {
        newArray[newArray.length] = cb(list[i]);
    };
    return newArray;
};

console.log(copy1(array1));

console.log("-----------------------");

////// 3 способ ///

let data3 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(data3);

let data4 = data3.map(function (value4) {
  return value4 * 10;
});

console.log(data4);

console.log("-----------------------");
console.log("Переделанный способ");

///// Переделанный способ////

const array2 = [15, 16, 17, 18, 19, 20];

let multiply10 = (value) => value * 10; 

function copy3(list3, modFunc = (n) => n) {
    const newArray = [];

    for (let i = 0; i < list3.length; i++) {
        newArray.push(modFunc(list3[i]));     
    };
    return newArray;
};

console.log(copy3(array2));
console.log(copy3(array2, multiply10));