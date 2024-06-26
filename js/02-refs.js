/*
 * Об'єкти
 *
 * - Тип даних за посиланням
 */

const user = {
  firstName: 'Oleksii',
  lastName: 'Repin',
};

const userCopy = user;

console.log('user:', user);
console.log('userCopy:', userCopy);

userCopy.firstName = 'Glen';

console.log('user:', user);
console.log('userCopy:', userCopy);
