/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

class User {
  #password;
  #login;

  static test = 10;

  constructor(firstName, lastName, password, login) {
    // this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.#password = password;
    this.#login = login;
    // return this;
  }

  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  getUserPassword() {
    return this.#password;
  }

  setUserPassword(newPassword) {
    this.#password = newPassword;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }
}

console.dir(User);

console.log(User.test);

const userOleksii = new User('Oleksii', 'Repin', 'qwerty123', 'oleksii@gmail.com');

console.log(userOleksii);

// console.log(userOleksii.getUserPassword());

// userOleksii.setUserPassword('123456');

// console.log(userOleksii.getUserPassword());

// console.log(userOleksii.login);

// userOleksii.login = 'test@gmail.com';

// console.log(userOleksii.login);

// console.log(Math);

// class OwnMath {
//   static PI = 3.14;

//   static floor() {}

//   static max() {}

//   static min() {}
// }

// console.dir(OwnMath);
