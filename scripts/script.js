const obj = {
  result: '',
  copy: function (buffer) {
    this [buffer] = this.result;
    return this;
  },
  clear: function() {
    this.result = 0;
    return this;
  },
  doFunction: function (func,x,y) {
    this.result = func(x,y);
    return this;
  },
  target: function (property) {
    let res = this.result;
    this.clear();
    this[property] = res;
    return this;
  },
};

function sum(x, y) {
  return x + y;
};

function mul(x, y) {
  return x * y;
};

obj .doFunction(sum, 2, 4) .copy('nom_name') .target('summary') .doFunction(sum, 2, 4)
obj.summary
obj.clear()
obj.summary
console.log(obj.result);
console.log(obj.nom_name);
console.log(obj.summary);
console.log(obj);