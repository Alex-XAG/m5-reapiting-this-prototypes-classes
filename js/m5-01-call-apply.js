//  call and apply

// const showThis = function (...args) {
//   console.log(args);
//   console.log("showThis -> this", this);
// };

// // console.dir(showThis); // methods of function

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, "...args");
// showThis.apply(objA, ["...args"]);

// const objB = {
//   x: 5,
//   y: 10,
// };

// showThis.call(objB, 5, 7, 2, 6, 3);
// showThis.call(objB, [5, 7, 2, 6, 3]);

// showThis();

const changeColor = function (color) {
  console.log("changeColor -> this", this);
  this.color = color;
};

const hat = {
  color: "black",
};

// changeColor.call(hat, "orange");
// console.log(hat); // {color: "orange"}

const sweater = {
  color: "green",
};

// changeColor.call(sweater, "blue");
// console.log(sweater); // {color: "blue"}

// //////// bind ////////////

const changeHatColor = changeColor.bind(hat);
changeSweaterColor = changeColor.bind(sweater);

changeHatColor("yellow");
console.log(hat);

changeSweaterColor("red");
console.log(sweater);
