class Human {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  humanInfo () {
    console.log(this);
  }
}

class Car { 
  constructor (mark,model,year,registrationNumber) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.registrationNumber = registrationNumber;
  }

  addOwner (human) {
    if (human.age >= 18) {
      this.owner = human;
  } else { 
    console.log(`${human.name} Ви не повнолітній, доступ заборонено`)
    }
  }

  carInfo () {
    console.log(this);
    if (this.owner) {
      this.owner.humanInfo () ;
    }
  }
}

const human1 = new Human('Valera', '28');
const human2 = new Human('Natali', '15');
const human3 = new Human('Sergey', '32');
const human4 = new Human('Vanya', '38');

console.log(human1,human2,human3,human4);

const car1 = new Car('Renault', 'Duster', 2014, 'ВЕ2774АР');
const car2 = new Car('Toyota', 'Prius', 2013, 'ВН7777ВК' );
const car3 = new Car('Hyundai', 'Sonata' , 2012 , 'АА9669АН');

console.log(car1,car2,car3);

car1.addOwner(human3);
car2.addOwner(human1);
car3.addOwner(human2);

console.log(car1,car2,car3);

car1.carInfo();
car2.carInfo();