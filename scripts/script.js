const numbers1 = [0, 1, 3, 6, 8];
const numbers2 = [0, 2, 3, 6, 7];

function printNumbers(numbers) {
  let index = 0;

  function printValue(isNextResolve) {
    console.log(numbers[index++]);

    if (!isNextResolve) {
      throw new Error('Error');
    };
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      printValue(true);
      resolve();
    }, 0);
  })

    .then(() => {
      printValue(true);
    }, () => {
      printValue(false);
    })

    .then(() => {
      printValue(true);
    }, () => {
      printValue(false);
    })

    .then(() => {
      printValue(true);
    }, () => {
      printValue(false);
    })

    .then(() => {
      printValue(true);
      console.log('=======');
    }, () => {
      printValue(false);
    });
};

printNumbers(numbers1);
printNumbers(numbers2);