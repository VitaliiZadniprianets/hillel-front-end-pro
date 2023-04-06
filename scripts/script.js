///////// 4 задание /////

let inputString = prompt("Введіть рядок:");
let symbolDelete = prompt("Введіть символи для видалення через кому:").split(",");

console.log(inputString);
console.log(symbolDelete);

function removeElementsOfString(string, symbols) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (symbols.indexOf(string[i]) === -1) {
      result += string[i];
    };
  };
  return result;
};

console.log(removeElementsOfString(inputString, symbolDelete));