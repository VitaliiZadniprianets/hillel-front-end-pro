class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residentsOfAparts = [];
  }
  
  addResident(human) {
    this.residentsOfAparts.push(human);
  }
}

class House {
  constructor(maxNumbersOfFlats) {
    this.flats = [];
    this.maxNumbersOfFlats = maxNumbersOfFlats;
  }

  addFlat(flat) {
    if (this.flats.length === this.maxNumbersOfFlats) {
      console.log('The maximum number of flats is reached.');
    } else {
      this.flats.push(flat);
    }
  }
}

const human1 = new Human('Valera', 'male');
const human2 = new Human('Natali', 'female');
const human3 = new Human('Sergey', 'male');
const human4 = new Human('Tanya', 'female');

console.log(human1, human2, human3, human4);

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

console.log(apartment1, apartment2, apartment3);

apartment1.addResident(human1);
apartment1.addResident(human4);
apartment2.addResident(human3);
apartment3.addResident(human2);

console.log(apartment1, apartment2, apartment3);
console.log(apartment1.residentsOfAparts, apartment2.residentsOfAparts, apartment3.residentsOfAparts);

const houseOfDream = new House(2);
console.log(houseOfDream);

houseOfDream.addFlat(apartment1);
houseOfDream.addFlat(apartment2);

console.log(houseOfDream);

houseOfDream.addFlat(apartment3);
console.log(houseOfDream);