class Hamburger {
  static SIZE_SMALL = {
    price: 50,
    calories: 20,
  };

  static SIZE_BIG = {
    price: 100,
    calories: 40,
  };

  static STUFFING_CHEESE = {
    price: 10,
    calories: 20,
  };

  static STUFFING_SALAD = {
    price: 20,
    calories: 5,
  };

  static STUFFING_POTATOES = {
    price: 15,
    calories: 10,
  };

  static TOPPING_SAUCE = {
    price: 15,
    calories: 0,
  };

  static TOPPING_MAYONNAISE = {
    price: 20,
    calories: 5,
  };

  constructor(size, stuffing, toppings = []) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = toppings;
  }

  calculatePrice() {
    let price = this.size.price + this.stuffing.price;
    this.toppings.forEach((topping) => {
      price += topping.price;
    });
    return price;
  }

  calculateCalories() {
    let calories = this.size.calories + this.stuffing.calories;
    if (Array.isArray(this.toppings)) {
      this.toppings.forEach((topping) => {
        calories += topping.calories;
      });
    }
    return calories;
  }

  addTopping(topping) {
    if (!this.toppings) {
      this.toppings = [];
    }
    this.toppings.push(topping);
  }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_MAYONNAISE);

console.log("Calories with MAYONNAISE : " + hamburger.calculateCalories());
console.log("Price with MAYONNAISE: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Price with sauce: " + hamburger.calculatePrice());
console.log("Calories with sauce : " + hamburger.calculateCalories());