/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//* Функції це об'єкти зі своїми властивостями та методами
// const fn = function () {
//   console.log('Hello');
// };

// fn.test = 10;

// console.dir(fn);

// console.log(fn.test);

//? Викличте функцію showFullName у контексті об'єкта user
// const showFullName = function (message, someNumber) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
//   console.log(someNumber);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Welcome', 100);
// showFullName.apply(user, ['Hello', 200]);

//? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Marvin',
//   lastName: 'Jordan',
//   age: 30,
// };

// showFullName.call(anotherUser, 'Hello', 300);

//? Викличте функцію changeColor в контексті різних обʼєктів
// const changeColor = function (color) {
//   console.log('changeColor -> this', this);

//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

// changeColor.call(hat, 'red');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// console.log(sweater);

// changeColor.apply(sweater, ['yellow']);

// console.log(sweater);

//? Створіть копію функції changeColor з привʼязаним контекстом
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

/*
function (color) {
  this = hat;
  this.color = color;
};
*/

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('red');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// console.log(sweater);

// const changeSweaterColor = changeColor.bind(sweater);

// changeSweaterColor('yellow');

// console.log(sweater);

//? Передайте метод обʼєкта в якості callback функції
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('This --->', this);
//   },

//   showName: function (newName) {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   callback();
// };

// someFunction(user.showThis.bind(user));
// someFunction(user.showName.bind(user));
