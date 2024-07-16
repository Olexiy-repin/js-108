/*
? Напиши клас User який створює об'єкт із властивостями login та email.
? Оголоси приватні властивості #login та #email, доступ до яких зроби через
? гетер та сетер login та email.
 */
class User {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User('Mango', 'mango@dog.woof');

console.log(mango);

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

console.log(mango.email); // mango@dog.woof
mango.email = 'gaatke@fucvod.com';
console.log(mango.email); // gaatke@fucvod.com

const poly = new User('Poly', 'poly@mail.com');

console.log(poly);

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie
