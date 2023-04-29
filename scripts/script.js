const history = {
  records: [],
  get templateRecords() {
    const template = this.records.map(
      (record) =>
        '<li class="record">' + JSON.stringify(record, null, 50) + "</li>"
    );
    return (
      '<ul class="records card card__shadow">' + template.join(" ") + "</ul>"
    );
  },
  drawRecords() {
    document.write(this.templateRecords);
  },
};

const shape = {
  dependencies: Object.seal({
    left: 100,
    right: 100,
    top: 100,
    bottom: 100,
  }),
  get perimeter() {
    //------ Bug ---

    //  ------ Your resolve problem there -----

    //  ------ Your resolve problem there -----

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

    return total;
  },

  set perimeter(perimeter) {
    if (!Number.isInteger(perimeter) || perimeter < 400) {
      return;
    };

    const size = perimeter / 4;

    this.dependencies = Object.seal({
      left: size,
      right: size,
      top: size,
      bottom: size,
    });

    // side effect

    history.records.push({
      dependencies: this.dependencies,
      perimeter: perimeter,
    });
  },
};

// shape.dependencies.foo = NaN; // ignored because  - sealed
// delete shape.dependencies.left; // ignored because  - sealed

// shape.perimeter = 500; // write -- call setter

// console.log(shape.perimeter, "shape.perimeter"); // read -- call getter

// shape.dependencies.bottom = 200;

/// unoptimized operations
console.log(shape.perimeter, "shape.perimeter");
console.log(shape.perimeter, "shape.perimeter");
console.log(shape.perimeter, "shape.perimeter");

// draw records on screen
history.drawRecords();

// compare -- modify and current dependencies
console.log(shape.dependencies, "shape.dependencies");
console.log(
  history.records[history.records.length - 1].dependencies,
  "records"
);