let obj1 = { 
a: 10,
b: 12,
c: 13,
  g:  {
    m: 20
  }
};
console.log(obj1);

let obj2 = {
  d : 'sddssdds',
  f : 232332,
  j : 'sd883jnd',
  k : {
    o: 233,
    p: 'sddsidfhsdfdskdf3'
  }
};
console.log(obj2);

console.log('-----------------------');

////// Функція assignObjects(obj1, obj2), яка склеює властивості двох об'єктів: /////

function assignObjects1(obj1, obj2) {
  return {...obj1, ...obj2};
};

console.log(assignObjects1(obj1,obj2));
