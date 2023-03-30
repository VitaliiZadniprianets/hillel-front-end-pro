const arr_1 = [1, 5, 6, 2, 4];

console.log(arr_1);

let n = arr_1.length;

for (let i = 0 ; i < n / 2 ; i ++) {
  let temp = arr_1[i];
  arr_1[i] = arr_1[n - 1 - i];
  arr_1[n - 1 - i] = temp;
};

console.log(arr_1);