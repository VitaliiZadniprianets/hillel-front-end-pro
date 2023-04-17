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

////// Функція assignObjects(obj1, obj2), яка склеює властивості двох об'єктів: /////

function assignObjects1(obj1, obj2) {
  return {...obj1, ...obj2};
};

console.log(assignObjects1(obj1,obj2));