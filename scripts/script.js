let obj1 = { 
  a: 10,
  b: 12,
  c: 13,
  d: 'sdffddf',
  g: 20
};
console.log(obj1);

let obj2 = {
  a: 20,
  b: 30,
  c: 40,
  g: 50,
  h: 'sddssdds',
  k: 2343,
  o:"sddasds2232323"
};
console.log(obj2);

console.log('-----------------------');

////// 1) Функція assignObjects(obj1, obj2), яка склеює властивості двох об'єктів: /////

function assignObjects1(obj1, obj2) {
  return {...obj1, ...obj2};
};

console.log(assignObjects1(obj1,obj2));
console.log("----------------------");

///////// 2) Адаптувати функцію assignObjects() під невизначену кількість об'єктів. assignObjects(obj1, obj2, ....., objn); ////////

let obj3 = {
  p: 'foo',
  y: false,
  z: false
};

function assignObjects2_1(...objects) {
  return objects.reduce((acc, obj) => ({...acc, ...obj}), {});
};

console.log(assignObjects2_1(obj1,obj2,obj3));
console.log("----------------------");

///////// 3)  Додати третій аргумент flag, який є boolean. Якщо flag === true, тоді за наявності властивості в обох об'єктів у результат піде значення першого об'єкта, false - з другого

let obj4 = {
  y: true,
  z: true
};

function assignObjects3(obj1, obj2, flag = Boolean) {
  if (flag === true) {
    return {...obj2, ...obj1};
  } else {
    return {...obj1, ...obj2};
  }
};

console.log(assignObjects3(obj3, obj4,true));
console.log("----------------------");
console.log(assignObjects3(obj3, obj4,false));
console.log("----------------------");

///////// 4) Зробити параметр flag не обов'язковий, якщо параметр не переданий – то за замовченням він буде false /////

function assignObjects4(obj1, obj2, flag = false) {
  if (flag === true) {
    return {...obj2, ...obj1};
  } else {
    return {...obj1, ...obj2};
  }
};

console.log(assignObjects4(obj1, obj2)); // flag має значення false
console.log("----------------------");
console.log(assignObjects4(obj1, obj2, true)); // flag має значення true
console.log("----------------------");
console.log(assignObjects4(obj3, obj4)); // flag має значення false)
console.log("----------------------");
console.log(assignObjects4(obj3, obj4, true)); // flag має значення true
console.log("----------------------");

////// Фінальна функція /////

function assignObjects(...objects) {
  let result = {};

  let flag = typeof objects[objects.length - 1] === 'boolean' ? objects.pop() : false;

  objects.forEach(obj => {
    for (let key in obj) {
      if (key in result && flag) {
        continue;
      } else {
        result[key] = obj[key];
      }
    }
  });

  return result;
};

console.log(assignObjects({a: 12, b: 3}, {a: 13, h: 0}, {a: 100, b: 200, z: 300}, true));
console.log("----------------------");
console.log(assignObjects({a: 12, b: 3}, {a: 13, h: 0}, {a: 100, b: 200, z: 300}));