////// 3 задание ///////

const countRows = +prompt('Введіть кількість рядків для двомірного массиву');
const countColumns = +prompt('Введіть кількість колонок для двомірного массиву');

function createMatrix(rows, columns) {
  let matrix = [];

  for(let i = 0; i < rows; i++) {
    let row = [];
    for(let j = 0; j < columns; j++) {
      let val = prompt(`Введіть значення для елемента [${i}][${j}]`);
      row.push(val);
    };
    matrix.push(row);
  };

  return matrix;
};

console.log(createMatrix(countRows, countColumns));