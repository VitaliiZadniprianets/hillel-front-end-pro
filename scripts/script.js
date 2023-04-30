// Создаем объект истории изменений
const history = {
  records: [], // Массив записей
  // Геттер для получения шаблона записей
  get templateRecords() {
    const template = this.records.map(
      (record) =>
        '<li class="record">' + JSON.stringify(record, null, 50) + "</li>"
    );
    // Формируем список записей
    return (
      '<ul class="records card card__shadow">' + template.join(" ") + "</ul>"
    );
  },
  // Выводим список записей на экран
  drawRecords() {
    document.write(this.templateRecords);
  },
};

// Создаем объект фигуры
const shape = {
  dependencies: Object.seal({
    left: 100,
    right: 100,
    top: 100,
    bottom: 100,
  }),
  // Геттер для получения периметра
  get perimeter() {
    // Проверяем, были ли изменены зависимости
    const lastRecord = history.records[history.records.length - 1];
    const dependenciesChanged = !lastRecord || !Object.is(
      lastRecord.dependencies,
      this.dependencies
    );
    // Если изменения были, то пересчитываем периметр и создаем новую запись в истории
    if (dependenciesChanged) {
      // there are maybe heavy calculations
      const total = Object.values(this.dependencies).reduce(
        (accm, value) => accm + value,
        0
      );
      // side effect
      history.records.push({
        dependencies: this.dependencies,
        perimeter: total,
      });
    }
    // Возвращаем последний периметр из истории
    return history.records[history.records.length - 1].perimeter;
  },
  // Сеттер для задания периметра
  set perimeter(perimeter) {
    // Проверяем переданный периметр на корректность
    if (!Number.isInteger(perimeter) || perimeter < 400) {
      return;
    };
    // Вычисляем размеры зависимостей и задаем их
    const size = perimeter / 4;
    this.dependencies = Object.seal({
      left: size,
      right: size,
      top: size,
      bottom: size,
    });
    // Добавляем новую запись в историю
    history.records.push({
      dependencies: this.dependencies,
      perimeter: perimeter,
    });
  },
};

// Примеры использования объекта фигуры
// shape.dependencies.foo = NaN; // ignored because  - sealed
// delete shape.dependencies.left; // ignored because  - sealed

// shape.perimeter = 500; // write -- call setter

// console.log(shape.perimeter, "shape.perimeter"); // read -- call getter

// shape.dependencies.bottom = 200;

/// unoptimized operations
console.log(shape.perimeter, "shape.perimeter");
console.log(shape.perimeter, "shape.perimeter");
console.log(shape.perimeter, "shape.perimeter");

// Отображаем список изменений на экране
history.drawRecords();

// Сравниваем текущие зависимости с последней записью в истории
console.log(shape.dependencies, "shape.dependencies");
console.log(
  history.records[history.records.length - 1].dependencies,
  "records"
);