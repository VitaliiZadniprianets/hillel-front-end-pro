const characters ='abcdefghijklmnopqrstuvwxyz0123456789';
console.log(characters);

function generateKey(length, characters) {
  let result = '';
  let i = 0;

  while (i < length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomPartOFCharacters = characters[randomIndex];
    result += randomPartOFCharacters;
    i++;
  };

  return result;
};

const key = generateKey(16, characters);
console.log(key);