/*
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Порядок виконання коду
 * - Області видимості
 */

// function greeting(firstName, lastName) {
//   // let firstName = 'Oleksii';
//   // let lastName = undefined;

//   console.log(`Welcome ${firstName} ${lastName}!`);

//   // return undefined;
// }

// greeting('Oleksii', 'Repin');

// function sum(num1, num2) {
//   const total = num1 + num2;

//   return total;
// }

// const result = sum(10, 20);

// console.log(result);

/*
? Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника.
? Сторони прямокутника будуть переденні до параметрів sideA та sideB.
*/

// function getRectArea(sideA, sideB) {
//   return sideA * sideB;
// }

// console.log(getRectArea(8, 11)); // 88
// console.log(getRectArea(18, 11)); // 198
// console.log(getRectArea(8, 21)); // 168

/*
 ? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 ? маси тіла людини. Для цього необхідно розділити вагу на
 ? квадрат висоти.
 ?
 ? Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 ? бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 ? частини може бути кома.
 ?
 ? Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// function calcBMI(weight, height) {
//   weight = Number(weight.replace(',', '.'));
//   height = Number(height.replace(',', '.'));

//   const result = weight / height ** 2;

//   return result.toFixed(1);
// }

// const bmi = calcBMI('88,3', '1.75');

// console.log(bmi); // 28.8

/*
 ? Напиши функцію generateRandomInteger(min, max), яка буде генерувати
 ? число у відповідному діапазоні.
 ? Формула, генерація рандомного числа в діапазоні: Math.floor(Math.random() * (max - min + 1)) + min;
 */

// function generateRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(generateRandomInteger(0, 255));

// // document.body.style.backgroundColor = `rgb(${generateRandomInteger(
// //   0,
// //   255
// // )}, ${generateRandomInteger(0, 255)}, ${generateRandomInteger(0, 255)})`;
