/*
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

//* Розглянемо як this поводиться в методах
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('This --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// user.showThis();
// user.showName();

//* Розглянемо як this поводиться у звичайних функціях.
//? Function expression
// const showThis = function () {
//   // this = undefined;

//   console.log('This --->', this);
// };

// showThis();

//? Function declaration
// function showThis() {
//   // this = undefined;

//   console.log('This --->', this);
// }

// showThis();

//* Присвоєння функції як методу об'єкта
// const showThis = function () {
//   console.log('This --->', this);
// };

// showThis();

// const showName = function () {
//   console.log(`Hello ${this.name}`);
// };

// showName();

// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: showThis,
//   showUserName: showName,
// };

// user.showUserThis();
// user.showUserName();

// const anotherUser = {
//   name: 'Etta Burgess',
//   age: 40,

//   showAnotherUserThis: showThis,
//   showAnotherUserName: showName,
// };

// anotherUser.showAnotherUserThis();
// anotherUser.showAnotherUserName();

//* Виклик методу об'єкта без контексту
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: function () {
//     console.log('This --->', this);
//   },

//   showUserName() {
//     console.log(this.name);
//   },
// };

// const showThis = user.showUserThis;

// user.showUserThis();

// console.log(showThis);

//* This в callback функціях
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('This --->', this);
//   },

//   showName: function () {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   callback();
// };

// someFunction(user.showName);

/*
 * This у стрілочних функціях. Стрілочні функції не мають свого this,
 * this в стрілках завжди посилається на батьківський this.
 */
// const user = {
//   name: 'Luis',
//   age: 30,

//   changeAge: () => {
//     console.log(`this ---->`, this);
//   },
// };

// user.changeAge();
