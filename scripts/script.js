const obj = {
  a: 10,
  b: 12,
  c: {
    f: 13,
    g: {
      m: 20
    }
  }
};
console.log(obj);
console.log('----------------------');

function addToSomeObj(obj1, newObj) {
  for (const nestedKey in obj1) {
    newObj[nestedKey] = obj1[nestedKey];
  };
  return newObj;
};

function convert(obj) {
  const someObj = {};
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      const nestedObj = convert(obj[key]);
      addToSomeObj(nestedObj, someObj);
    } else { 
      someObj[key] = obj[key];
    };
  };
  return someObj;
};

const newObj = convert(obj);
console.log(newObj);