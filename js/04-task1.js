/*
? Деструктуризуй об'єкт таким чином щоб отримати значення username, firstName, lastName
 */

const user = {
  id: 1,
  username: 'harry_potter',
  profile: {
    firstName: 'Harry',
    lastName: 'Potter',
    age: 25,
  },
};

console.log(user);

const {
  username,
  profile: { firstName, lastName },
} = user;

console.log(`Ім'я користувача (за нікнеймом): ${username}`);
console.log(`Ім'я користувача: ${firstName}`);
console.log(`Прізвище користувача: ${lastName}`);
