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

function convert(obj) {
  const someObj = {};
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      const nestedObj = convert(obj[key]);
      
        function addToSomeObj(Obj1) {
          for (const nestedKey in Obj1) {
            someObj[nestedKey] = Obj1[nestedKey];
          };
        };
      addToSomeObj(nestedObj);
    } else { 
      someObj[key] = obj[key];
    };
  };
  return someObj;
};

const newObj = convert(obj);
console.log(newObj);