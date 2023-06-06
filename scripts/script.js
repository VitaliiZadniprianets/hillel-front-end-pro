class HTMLElement {
  constructor(tagName, className, id) {
    this.tagName = tagName;
    this.className = className;
    this.id = id;
  }

  rotate() {
    console.log("rotating from HTMLElement");
  }

  render() {
    console.log("rendering from HTMLElement");
  }
}

class HTMLElementInput extends HTMLElement {
  #typeInputAbout = "";
  #value = "";
  valid = false;

  constructor(type, value, ...args) {
    super(...args);
    this.#typeInputAbout = type;
    this.value = value;
  }

  get type() {
    return this.#typeInputAbout;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value.trim();
  }

  someMethod(string) {
    this.text = string || "some default text";
    console.log("This is a method from HTMLElementInput");
  }

  validate() {
    if (this.#value) {
      this.valid = true;
    } else {
      this.valid = false;
    }
  }
}

let someInput = new HTMLElementInput("sometext", "Іnput", "myinput", "input class", 17);

someInput.someMethod("Hello Input");
someInput.value = "" ;
someInput.validate();
console.log(someInput,someInput.valid);