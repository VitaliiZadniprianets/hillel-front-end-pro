function SuperMath() {
  this.check = function(obj) {
    let confirmation = confirm('Ви бажаєте виконати дію ' + obj.znak + ' з числами ' + obj.X + ' і ' + obj.Y + '? (Натисніть ОК для підтвердження або Скасувати для введення нових значень)');

    if (confirmation) {
      let result = this.calculate(obj.X, obj.Y, obj.znak);
      alert('Результат: ' + result);
    } else {
      this.input(obj);
    }
  };

  this.input = function() {
    let newX = parseInt(prompt('Введіть нове значення для X:'));
    let newY = parseInt(prompt('Введіть нове значення для Y:'));

    if (!isNaN(newX) && !isNaN(newY) && newX > 0 && newY > 0) {
      let newZnak = prompt('Введіть новий оператор (+ - / * %):');
      let newObject = {
        X: newX,
        Y: newY,
        znak: newZnak,
      };

      let newResult = this.calculate(newObject.X, newObject.Y, newObject.znak);
      alert('Результат: ' + newResult);

      this.check(newObject);
    } else {
      alert('Введені значення повинні бути числами і більшими або рівними нулю.');
    }
  };
}

SuperMath.prototype.calculate = function(X, Y, znak) {
  switch (znak) {
    case '+':
      return X + Y;
    case '-':
      return X - Y;
    case '/':
      return X / Y;
    case '*':
      return X * Y;
    case '%':
      return X % Y;
    default:
      alert('Неправильний оператор. Доступні оператори: + - / * %');
      return null;
  }
};

const obj = {
  X: 12,
  Y: 3,
  znak: '+',
};

console.log(obj);

let someObj = new SuperMath();
someObj.check(obj);
console.log(someObj);