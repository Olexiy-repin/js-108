/*
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

//? Обʼєднайте два рядки в один і виведіть до консолі.
// const firstName = 'Chelsy';
// const lastName = 'Emerald';

// const fullName = firstName + ' ' + lastName + '!';

// console.log(fullName);

/*
? Підставте значення зміної quantity до рядка orderMsg, використоуючи шаблоні рядки.
? Має вийти рядок: You ordered {quantity} bots.
*/
// const quantity = 15;
// const orderMsg = `You ordered ${quantity} bots.`;

// console.log(orderMsg);

/*
  ? Запросіть у користувача ім'я та прізвище і виведіть у консоль повідомлення:
  ? Hello <імʼя> <прізвище>, you are logged in.
*/

// const firstName = prompt('Your first name');
// const lastName = prompt('Your last name');

// const message = `Hello ${firstName} ${lastName}, you are logged in.`;

// console.log(message);

//? Дізнайтесь довжину рядка message.

// const message = 'This string is 28 chars long';
// const lengthOfMessage = message.length;

// console.log(message);
// console.log(lengthOfMessage);

/*
 ? Склади фразу за допомогою шаблонних рядків
 ? {companyName} has {repairBots + defenceBots} bots in stock, 
 ? де companyName, repairBots та defenceBots - змінні вставлені в рядок.
 */

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;

// const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;

// console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
