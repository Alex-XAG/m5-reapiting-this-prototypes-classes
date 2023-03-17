//  Фуекция - это частный случай объекта => ССЫЛОЧНЫЙ ТИП

console.log("[] === []: ", [] === []); // false
console.log("{} === {}: ", {} === {}); // false
console.log(
  "function () {} === function() {}: ",
  function () {} === function () {}
); // false

const fnA = function () {
  console.log("hello!!!");
};

const fnB = fnA;
console.log("fnB === fnA: ", fnB === fnA); // true

// Контекст (this) /////////////////
// -Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст
// - Когнтекст определяется в МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно

//  Как метод объекта. В контексте объекта./////////////////

const user = {
  tag: "Mango",
  showTag() {
    console.log("showTag -> this", this); //
  },
};

// user.showTag(); // showTag -> this - {tag: "Mango", showTag f}

// ///////// Вызов без контекста
// - В строгом режиме = undefined
// - Не в строгом режиме = window

const foo = function () {
  console.log("foo -> this", this);
};

foo();

//  Как метод объекта, но объявлена как внешняя функция.
//  В контексте объекта.

const showTag = function () {
  console.log("showTag -> this", this);
  console.log("showTag -> this.tag", this.tag);
};

showTag(); // undefined

const user1 = {
  tag: "Mango",
};

user1.showUserTag = showTag;
console.log("user1 ", user1);

// user1.showUserTag();

//  Вызов без контекста, но объявлена как метод объекта ////////////////

const user2 = {
  tag: "Mango",
  showTag() {
    console.log("showTag -> this", this); //
  },
};

user2.showTag();

const outerShowTag = user.showTag;

outerShowTag(); // this - undefined

// Контекст в колбек-функциях /////////////

const user3 = {
  tag: "Mango",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

const invokeAction = function (action) {
  console.log(action);

  action();
};

invokeAction(user3.showTag); // undefined

// ////////// counter /////////////

const counter = {
  value: 0,
  increment(value) {
    console.log("increment -> this", this); // undefined
    this.value += value;
  },
  decrement(value) {
    console.log("decrement -> this", this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter)); // undefined without bind
updateCounter(5, counter.decrement.bind(counter)); // undefined

console.log(counter); // 5
