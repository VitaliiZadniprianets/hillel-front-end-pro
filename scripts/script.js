function SuperMath() {
  this.check = function(obj) {
    let confirmation = confirm('Ви бажаєте виконати дію ' + obj.znak + ' з числами ' + obj.X + ' і ' + obj.Y + '? (Натисніть ОК для підтвердження або Скасувати для введення нових значень)');

    if (confirmation) {
      let result = this.calculate(obj.X, obj.Y, obj.znak);
      alert('Результат: ' + result);
    } else {
      this.input(obj);
      if (!isNaN(obj.X) && !isNaN(obj.Y) && obj.X > 0 && obj.Y > 0) {
        let newResult = this.calculate(obj.X, obj.Y, obj.znak);
        alert('Результат: ' + newResult);
      } else {
        alert('Введені значення повинні бути числами і більшими або рівними нулю.');
      }
    }
  };

  this.input = function(obj) {
    obj.X = parseInt(prompt('Введіть нове значення для X:'));
    obj.Y = parseInt(prompt('Введіть нове значення для Y:'));
    obj.znak = prompt('Введіть новий оператор (+ - / * %):');
    return obj;
  };

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
}

const obj = {
  X: 12,
  Y: 3,
  znak: '+',
};

console.log(obj);

let someObj = new SuperMath();
someObj.check(obj);
console.log(someObj);