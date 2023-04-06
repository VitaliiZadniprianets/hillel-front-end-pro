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

const first = +prompt ('Введіть перше число');
const mathOperation = prompt ('Оберіть одну з  дій: +, -, *, /, %, ^.');
const second = +prompt ('Введіть друге число');

function doMath(x, znak, y) {
  let result;
  
  switch(znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = Math.pow(x, y);
      break;
    default:
      return 'Непідтримуваний знак операції!';
  };

  return result;
};

console.log(doMath(first,mathOperation,second));

////// 3 задание ///////

