/*
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

// const username = '  Jacob Mercer  ';

// const result = username.trim().toLowerCase();

// console.log('username:', username);
// console.log('result:', result);

/*
? Нормалізація рядка
?
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»
*/

// const answer = 'ECMAScript';
// let userInput = prompt('Яка «офіційна» назва JavaScript?');

// if (userInput.toLowerCase() === answer.toLowerCase()) {
//   alert('Вірно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

/*
? Форматування посилання (endsWith)
?
? Напиши скрипт який перевіряє чи закінчується значення
?  змінної link символом /. Якщо ні, додай до кінця
?  значення link цей символ.
? Використовуй конструкцію if...else.
*/

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   link = link + '/';
// }

// console.log(link);

/*
? Форматування посилання (includes та логічне «І»)
? Напиши скрипт який перевіряє чи закінчується значення
? змінної link символом /. Якщо ні, додай до кінця
? значення link цей символ, але тільки в тому випадку,
? якщо в link є підрядок "my-site".
? Використовуй конструкцію if...else або тернарний оператор.
*/

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link = link + '/';
// }

// console.log(link);

/*
? Пошук у рядку методом includes()
? Потрібно перевірити чи є в рядку заборонені слова. 
? Заборонені слова зберігаються у змінних blacklistedWord1 та blacklistedWord2.
*/

// const blacklistedWord1 = 'spam';
// const blacklistedWord2 = 'sale';

// const string1 = "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const isString1IncludesForbiddenWords =
//   string1.toLowerCase().includes(blacklistedWord1) || string1.toLowerCase().includes(blacklistedWord2);

// console.log('string1: ', string1);
// console.log('isString1IncludesForbiddenWords: ', isString1IncludesForbiddenWords);

// const string2 = "Biggest SALE this week, don't miss out!";
// const isString2IncludesForbiddenWords =
//   string2.toLowerCase().includes(blacklistedWord1) || string2.toLowerCase().includes(blacklistedWord2);

// console.log('string2: ', string2);
// console.log('isString2IncludesForbiddenWords: ', isString2IncludesForbiddenWords);

// const string3 = '#fatlivesmatter advertising campaign';
// const isString3IncludesForbiddenWords =
//   string3.toLowerCase().includes(blacklistedWord1) || string3.toLowerCase().includes(blacklistedWord2);

// console.log('string3: ', string3);
// console.log('isString3IncludesForbiddenWords: ', isString3IncludesForbiddenWords);
