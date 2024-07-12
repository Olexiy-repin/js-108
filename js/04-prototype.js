/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const userMethods = {
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },

//   changeAge(newAge) {
//     this.age = newAge;
//   },
// };

// const userPauline = Object.create(userMethods);

// userPauline.firstName = 'Pauline';
// userPauline.lastName = 'George';
// userPauline.age = 20;

// console.log(userPauline);

// userPauline.getFullName();

// const userAnnie = Object.create(userMethods);

// userAnnie.firstName = 'Annie';
// userAnnie.lastName = 'Sims';
// userAnnie.age = 22;

// console.log(userAnnie);

// userAnnie.getFullName();

//* Цикл for...in

const userMethods = {
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },

  changeAge(newAge) {
    this.age = newAge;
  },
};

const userPauline = Object.create(userMethods);

userPauline.firstName = 'Pauline';
userPauline.lastName = 'George';
userPauline.age = 20;

console.log(userPauline);

for (const key in userPauline) {
  if (userPauline.hasOwnProperty(key)) {
    console.log(key);
  }
}
