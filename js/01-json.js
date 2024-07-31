/*
 * Формат JSON
 *
 * - Метод JSON.strigify(value)
 * - Метод JSON.parse(value)
 */

//? JSON.stringify()
// const user = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 30,
//   isAdult: true,

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user);

// const userJson = JSON.stringify(user);

// console.log(userJson); // '{"firstName":"Oleksii","lastName":"Repin","age":30,"isAdult":true}'

//? JSON.parse()
// const userJson = '{"firstName":"Oleksii","lastName":"Repin","age":30,"isAdult":true}';

// console.log(userJson);

// const user = JSON.parse(userJson);

// console.log(user);
// console.log(user.firstName);

/*
 * Конструкція try...catch для обробки помилок
 */

// console.log('Start!');

// try {
//   const userJson = '{"firstName":"Oleksii","lastName":"Repin","age":30,"isAdult":true}';

//   console.log(userJson);

//   const user = JSON.parse(userJson);

//   console.log(user);
// } catch (err) {
//   console.log(err);
// }

// console.log('End!');
