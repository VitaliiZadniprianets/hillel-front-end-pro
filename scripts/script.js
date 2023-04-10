function metricsDecorator(callback) {
  return function () {
      const start = performance.now();
      callback();
      const end = performance.now();
      return end - start;
  };
};

const analysePerfomace = metricsDecorator(() => {
  let sum = 0;
  let i = 0;
  for(; i < 1e8; i++) {
    sum += i;
  };
  console.log(sum, i);
});

const time = analysePerfomace();
console.log(time + ' миллисекунд.');

const analysePerfomace1 = metricsDecorator(() => {
  let arr = [];
  let j = 0;
  for(; j < 1e8; j++) {
    arr[j] = j;
  };
});

const time1 = analysePerfomace1();
console.log(time1 + ' миллисекунд.');