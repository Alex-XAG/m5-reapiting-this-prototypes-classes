//  Прототип объекта

//  - Object.create()
// - [[Prototype]] and __proto__
// - Object.getPrototypeOf()
// - Собственные свойства и Object.prototype.hasOwnProperty()
// - Цепочка прототипов

// const objC = { z: 5 };
// // console.log(objC.hasOwnProperty("z"));

// const objB = Object.create(objC);

// objB.y = 2;

// console.log(objC);
// console.log(objB);

// console.log(objB.y); // 2
// console.log(objB.z); // 5

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// objA.z = 1000;

// console.log("objA: ", objA);

// console.log(objA.hasOwnProperty("z"));

// console.log(objC.hasOwnProperty("z"));

///////////////////////////////////////////

// const dummyObj = {
//   message: "This is own property of object",
// };

const dummyObj1 = Object.create({
  message: "This is property of object prototype",
});
dummyObj1.message = "This is own property of object";

console.log(dummyObj.message);

// "Это собственное свойство объекта"
// "Это свойство на объекте-прототипе"

// /////// Алгоритм поиска в цепочке прототипов:
// 1. Поиск начинается в собственных свойствах
// 2. Если свойства нет в собственных, поиск переходит к цепочке прототипов
// 3. Поиск прекращается при первом совпадении (есть такое свойство)
// 4. Возвращается значение свойства
