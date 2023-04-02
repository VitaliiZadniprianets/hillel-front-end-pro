const minNumber = 8;
const maxNumber = 15;

const row = 5;
const column = 5;

const A = [];
A.length = row ;

let maxSum;
let maxSumIndex;
let minSum;
let minSumIndex;

for (let i = 0; i < row; i++) {
  A[i] = new Array(column);

  for (let j = 0; j < column; j++) {
    A[i][j] = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
  };
};

console.log(A);





