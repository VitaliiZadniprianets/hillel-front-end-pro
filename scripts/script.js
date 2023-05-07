const history = {
  records: [], // история изменения perimeter и dependencies
  get templateRecords() { // геттер, возвращающий отформатированную строку, содержащую все записи истории
    const template = this.records.map(
      (record) =>
      '<li class="record">' + JSON.stringify(record, null, 50) + "</li>"
    );
    return (
      '<ul class="records card card__shadow">' + template.join(" ") + "</ul>"
    );
  },
  drawRecords() { // метод, выводящий на экран все записи истории
    document.write(this.templateRecords);
  },
};

const shape = {
  dependencies: Object.seal({ // объект, содержащий значения, необходимые для вычисления периметра
    left: 100,
    right: 100,
    top: 100,
    bottom: 100,
  }),
  
  get perimeter() { // геттер, вычисляющий периметр на основе значений dependencies
    if (history.records.length && (Object.keys(this.dependencies).every(key =>
        this.dependencies[key] === history.records[history.records.length - 1].dependencies[key]
        ))
      ) { // если dependencies не изменились, вернуть значение perimeter из последней записи истории
        return history.records[history.records.length - 1].perimeter;
      };

    // вычисление периметра
    const total = Object.values(this.dependencies).reduce(
      (accm, value) => accm + value,
      0
    );

    // добавление записи в историю
    history.records.push({
      dependencies: Object.assign({}, this.dependencies), // создание копии объекта dependencies для избежания неявных изменений
      perimeter: total,
    });

    return total;
  },

  set perimeter(perimeter) { // сеттер, задающий новое значение периметра и соответствующие значения dependencies
    if (!Number.isInteger(perimeter) || perimeter < 400) { // если значение не является целым числом или меньше 400, ничего не делать
      return;
    }

    const size = perimeter / 4; // вычисление размера каждой стороны

    this.dependencies = Object.seal({ // задание новых значений для dependencies
      left: size,
      right: size,
      top: size,
      bottom: size,
    });

    // добавление записи в историю
    history.records.push({
      dependencies: Object.assign({}, this.dependencies), // создание копии объекта dependencies для избежания неявных изменений
      perimeter: perimeter,
    });
  },
};


shape.perimeter // вычисление и вывод значения периметра на экран
shape.perimeter // повторное вычисление значения периметра без изменений

shape.perimeter = 800; // изменение значения периметра

shape.perimeter // вычисление и вывод значения периметра на экран без изменений

shape.dependencies.bottom = 500; // изменение значения dependencies

shape.perimeter // вычисление и вывод значения периметра на экран, так как значения dependencies изменили
shape.perimeter //повторное вычисление значения периметра без изменений
shape.perimeter //повторное вычисление значения периметра без изменений

shape.dependencies.bottom = 800; //изменение значения dependencies

shape.perimeter; //вычисление и вывод значения периметра на экран, так как значения dependencies изменили
shape.perimeter; //повторное вычисление значения периметра без изменений


shape.perimeter = 1900 ; //изменение значения периметра 

// draw records on screen
history.drawRecords();