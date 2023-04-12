const arr = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];

console.log(arr);

function flat(mass) {
  let modArr = [];

  for (let i = 0; i < mass.length; i++) {
    if (Array.isArray(mass[i])) {
        modArr = modArr.concat(flat(mass[i]));
    } else {
        modArr.push(mass[i]);
    };
  };
  return modArr;
};

console.log(flat(arr));