//  Basics of OOP: classes, exemplaire (object), interface

// Functions- constructors
// - Naming
// - operator new
// - property Function.prototype

// const Car = function ({ brand, model, price } = {}) {
//   // 2. Function called in context object created,
//   // it means in this the link is recorded to the object
//   //   console.log(this);
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   //   this.changePrice = function (newPrice) {
//   //     this.price = newPrice;
//   //   }; // будет создано 3 разные функции на каждом объекте ПЛОХО

//   // 3. In the property this.__proto__ the link is recorded to the object Car.prototype
//   //  it mean Car.prototype is PROTOTYPE of future object (exemplaire)

//   // 4. Link to the object return in place of call new Car
// };

// Car.prototype.sayHi = function () {
//   console.log("Car.prototype,sayHi -> this", this);
//   console.log("Hello :) ");
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// console.log(Car.prototype);

// // 1. If function call by new, create empty object
// const myCar = new Car({ brand: "Audi", model: "Q3", price: 35000 });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000);

// const myCar2 = new Car({
//   brand: "BMW",
//   model: "X6",
//   price: 50000,
// });
// console.log(myCar2);

// const myCar3 = new Car({
//   brand: "Audi",
//   model: "A6",
//   price: 65000,
// });
// console.log(myCar3);

// 1. If function call by new, create empty object
// 2. Function called in context object created,
// it means in this the link is recorded to the object
// 3. In the property this.__proto__ the link is recorded to the object Car.prototype
//  it mean Car.prototype is PROTOTYPE of future object (exemplaire)
// 4. Link to the object return in place of call new Car

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const mango = new User({ email: "alex@gmail.com", password: 1111111 });

mango.changeEmail("alex.xag@mail.com");

console.log(mango);
