function SuperMath() {
    this.check = function(obj) {
      let allowedOperators = ['+', '-', '/', '*', '%'];
  
      if (!allowedOperators.includes(obj.znak)) {
        alert('Неправильний оператор. Доступні оператори: + - / * %');
        return;
      };
  
      let confirmation = prompt('Ви бажаєте виконати дію ' + obj.znak + ' з числами ' + obj.X + ' і ' + obj.Y + '? (Напишіть так або ні у поле вводу)');
  
      if (confirmation === "так") {
        let result = this.calculate(obj.X, obj.Y, obj.znak);
        alert('Результат: ' + result);
      } else if (confirmation === "ні") {
        let newX = parseInt(prompt('Введіть нове значення для X:'));
        let newY = parseInt(prompt('Введіть нове значення для Y:'));
  
        if (!isNaN(newX) && !isNaN(newY) && newX >= 0 && newY >= 0) {
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
        };
      };
    };
  
    this.calculate = function(X, Y, znak) {
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
          console.log('Неправильний оператор. Доступні оператори: + - / * %');
          return null;
      };
    };
};
  
let obj = { X: 12, Y: 3, znak: "+" };
let someObj = new SuperMath();
someObj.check(obj);