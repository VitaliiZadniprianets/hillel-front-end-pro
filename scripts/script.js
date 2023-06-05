class HTMLElement {
    constructor (tagName, className, id) {
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
  };

  class HTMLElementInput extends HTMLElement {

  #typeInputAbout = "" 

  constructor (type, ...args) {
    super(...args); 
    this.#typeInputAbout = type;
  }

  get type () {
  return this.#typeInputAbout
  } 

  someMethod(string) {
    this.text = string || 'some default text';
    console.log("This is a method from HTMLElementInput");
  }
}


const someInput = new HTMLElementInput ( "sometext", "input" , "inputclass", 17);

someInput.someMethod("Hello Input");

console.log(someInput);