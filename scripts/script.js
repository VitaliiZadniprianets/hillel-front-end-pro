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
  }