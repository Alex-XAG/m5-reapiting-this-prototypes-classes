const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

Car.description = "Класс описывающий автомобиль";

Car.logInfo = function (carObj) {
  console.log("Car.logInfo -> carObj", carObj);
};

const car = new Car({
  brand: "BMW",
  model: "X6",
  price: 50000,
});

class Car1 {
  static description = "Класс описывающий автомобиль";
  static logInfo(carObj) {
    console.log("Car1.logInfo -> carObj", carObj);
  }

  #test = "test";

  constructor({ brand, model, price } = {}) {
    console.log("Выполняется конструктор автоматически после вызова new Obj");
    console.log(this);

    this.brand = brand;
    this._model = model;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  updateModel(newModel) {
    this.model = newModel;
  }
  //   setModel(newModel) {
  //     this.model = newModel;
  //   }

  set model(newModel) {
    this._model = newModel;
  }

  //   getModel() {
  //     return this.model;
  //   }

  get model() {
    return this._model;
  }
}

const carInstance = new Car1({
  brand: "BMW",
  model: "X6",
  price: 50000,
});

// console.log(carInstance.getModel());
// carInstance.setModel("Q4");
// console.log(carInstance.getModel());

console.log(carInstance);
console.log(carInstance.model);
carInstance.model = "Q4";

console.log(Car1);
console.log(Car1.description);

console.log(carInstance);

Car.logInfo(carInstance);
