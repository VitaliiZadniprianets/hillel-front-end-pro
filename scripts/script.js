function* getPartsOfWord (string) {
   let someWord = "" ;
   let oneLetter = "" ;
   
   for (let i = 0; i < string.length; i++) {
     someWord += string[i];
     oneLetter = yield someWord + oneLetter;

     if (typeof oneLetter === "undefined") {
       oneLetter = "";
     };
   };

   return someWord;
};

const iterator = getPartsOfWord("hello");

console.log(iterator.next());
console.log(iterator.next(" Ukrainian"));
console.log(iterator.next());
console.log(iterator.next('!'));
console.log(iterator.next('@'));
console.log(iterator.next());