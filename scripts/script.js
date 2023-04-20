const data = {
  p: 600,
  str: 'hello',
  y: -50,
};

function addRecord() {
  for(let i = 0; i < arguments.length; i++) {
    for(key in arguments[i]) {
      this[key] = arguments[i][key];
    };
  };
};

addRecord.call(data, {x: 10}, {y: 20}, {z: 30, x: 50});

console.log(data.x); // 50
console.log(data.y); // 20
console.log(data.z); // 30
console.log(data.p); // 600
console.log(data.str); // 'hello'
console.log(data);

/////////////////////////////////////////////////
console.log('---------------------------------');

const data1 = {
  p: 600,
  str: 'hello',
  y: -50,
};

addRecord.apply(data1, [{x: 10}, {y: 20}, {z: 30, x: 50}]);

console.log(data1.x); // 50
console.log(data1.y); // 20
console.log(data1.z); // 30
console.log(data1.p); // 600
console.log(data1.str); // 'hello'
console.log(data1);