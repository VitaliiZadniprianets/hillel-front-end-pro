const minNumber = 5;
const maxNumber = 20;

const row = 6;
const column = 6;

const matrix = [];
matrix.length = row ;

console.log(matrix);

let maxSumm;
let maxSummIndex;

let minSumm;
let minSummIndex;

for (let i = 0; i < row; i++) {
  matrix[i] = new Array(column);

  for (let j = 0; j < column; j++) {
    matrix[i][j] = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
  };
};

console.log(matrix);

for (let i = 0; i < column; i++) {
  let summ = 0;
  
  for (let j = 0; j < row; j++) {
    summ += matrix[j][i];
  };

  console.log(`Сума елементів у стовпці з індексом [${i}] = ${summ}`);

  if (i === 0) {
    maxSumm = summ;
    maxSummIndex = i;

    minSumm = summ;
    minSummIndex = i;
    continue;
  };

  if (summ > maxSumm) {
    maxSumm = summ;
    maxSummIndex = i;
  };

  if (summ < minSumm) {
    minSumm = summ;
    minSummIndex = i;
  };
};

console.log(`У стовпці з індексом [${minSummIndex}] найменша сума елементів = ${minSumm}`);
console.log(`У стовпці з індексом [${maxSummIndex}] найбільша сума елементів = ${maxSumm}`);