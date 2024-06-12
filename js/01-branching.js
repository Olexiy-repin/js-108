/*
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

// const score = 10;

/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/

// const userNumber = Number(prompt('Введіть якесь число'));

// if (userNumber === 10) {
//   alert('Вірно!');
// } else {
//   alert('Невірно!');
// }

/*
? Перевірте чи є гроші на балансі, якщо є то виведіть до консолі 'Positive', інакше 'Negative'.
*/

// const balance = 1000;

// if (balance > 0) {
//   alert('Positive');
// } else {
//   alert('Negative');
// }

/*
? Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
?
? Якщо до дедлайну 0 днів - виведи рядок "Today"
? Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
? Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
? Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
? В інших випадках - виведи рядок "Incorrect value of days"
 */

// const daysUntilDeadline = 0;

// if (daysUntilDeadline === 0) {
//   alert('Today');
// } else if (daysUntilDeadline === 1) {
//   alert('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   alert('Overmorrow');
// } else if (daysUntilDeadline >= 3) {
//   alert('Date in the future');
// } else {
//   alert('Incorrect value of days');
// }

/*
? Перепишіть конструкцію if з використанням тернарного оператора.
*/

// const numA = 4;
// const numB = 1;

// const result = numA + numB < 4 ? 'Мало' : 'Багато';

// numA + numB < 4 ? (result = 'Мало') : (result = 'Багато');

// if (numA + numB < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

// console.log(result);

/*
?  Перепишіть if..else за допомогою декількох тернарних операторів.
*/

// const login = 'Співробітник';
// let message = login === 'Співробітник' ? 'Привіт' : login === 'Директор' ? 'Вітаю' : login === '' ? 'Немає логіну' : '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);
