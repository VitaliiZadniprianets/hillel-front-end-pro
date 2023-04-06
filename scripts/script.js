///// 1 задание ////

const B = [ 80, 75, true, undefined, NaN, false, null, 'dfanjdfhkadk', 100, 5];
console.log(B);

function averageOfNumberMassive (array) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && !isNaN(array[i])) {
      sum += array[i];
      count++;
    };
  };
  return sum / count
};

console.log('Average Of Numbers: ' + averageOfNumberMassive(B));

//////// 2 задание////

