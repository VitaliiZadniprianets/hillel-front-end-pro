//////// Задача № 1 /////////

const obj = {
  p: 600,
  str: 'hello',
  y: -50,
  renderObject: renderObject,
};

function renderObject() {
  let result = '';
  let rowBreak = '<br>';
  for(let key in this) {
    if (key !== 'renderObject' ) {
    result += key + ': ' + this[key] + rowBreak;
    };
  };
  document.write(result);
};

obj.renderObject();

//////// Задача № 2 /////////

const data = {
  addRecord: addRecord,
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

data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 });

console.log(data.x); // 50
console.log(data.y); // 20
console.log(data.z); // 30
console.log(data.p); // 600
console.log(data.str); // 'hello'
console.log(data);