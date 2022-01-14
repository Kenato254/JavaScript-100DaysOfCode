//! Classes are not hoisted they must be declared before use
class Base {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  description(...args) {
    if (args.length > 0) {
      return `Make: ${this.name}. Year: ${this.year}. Model: ${args[0]}. Color: ${args[1]}.`;
    }
    return `Make: ${this.name} Year: ${this.year}`;
  }
}

class Car extends Base {
  constructor(model, color) {
    super(Base);
    this.model = model;
    this.color = color;
  }
  get carModel() {
    //? Getter method. When fetching value from a getter method,
    //? brackets are not used after method name
    //* i.e car.carModel instead of normal way car.carModel()
    return this.model;
  }
  set carModel(m) {
    //? Setter method. Sets overwrite model with a new model name.
    //* car.carModel = "new model name"
    this.model = m;
  }
  static car() {
    return "A Car has four wheels and one or more backups!";
  }
}

class Motocyle extends Car {
  constructor(engine) {
    super(Car);
    this.engine = engine;
  }
  static motocyle(example) {
    return `A Motocyle i.e Honda ${example} has two wheels only.!`;
  }
}

let honda = new Motocyle();
honda.name = "Honda";
console.log(honda.name);
console.log(Motocyle.motocyle("CB500"));

let  jeep = new Car();
jeep.name = "Jeep";
jeep.year = "2020";
jeep.model = "Wrangler";
jeep.color = "Black";
console.log(jeep.description());
console.log(jeep.carModel);
jeep.carModel = "Cherokee";
console.log(jeep.carModel);
