const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);

function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
    }
  }
  return array;
}

removeElement(array, 7);
console.log(array);

///Если значений  с номером 7 несколько ///

const array1 = [1, 2, 3, 4, 7, 5, 6, 7]
console.log(array1);

function removeElement1(array1, item1) {
  for  (let j = array1.length - 1; j >= 0; j--) {
    if (array1[j] === item1) {
      array1.splice(j, 1);
    };
  };
  return array1;
};

removeElement1(array1, 7);
console.log(array1);