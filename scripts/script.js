const arr_1 =  [1, 2, 3, 4, 5, 6, 7] ;
let n = arr_1.length;

if (n % 2 !== 0) {
  n--;
}

for (let i = 0; i < n ; i += 2) {
  let temp = arr_1[i] ;
  arr_1[i] = arr_1[i + 1] ;
  arr_1[i + 1] = temp ;
};

console.log(arr_1);