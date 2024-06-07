/*
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/
// const userInput = Number(prompt('Enter your number'));

// console.log(userInput);

//? Дізнайтесь числове значення ширини елемента.
// let elementWidth = '50px';

// elementWidth = Number.parseInt(elementWidth);

// console.log('elementWidth: ', elementWidth);

//? Дізнайтесь числове значення висоти елемента.
// let elementHeight = '200.74px';

// elementHeight = Number.parseFloat(elementHeight);

// console.log('elementHeight: ', elementHeight);

//? Попросіть користувача ввести два числа, складіть їх та виведіть результат у консоль.
// const numA = Number(prompt('Enter first number'));
// const numB = Number(prompt('Enter second number'));

// const result = numA + numB;

// console.log(result);

/*
 ? Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 ? значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 ? та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

// let value = 27.9;

// value = Math.round(value);

// console.log(value);

// console.log(Math.min(0, 1, -2, -10, 2.5, 10));
// console.log(Math.max(0, 1, -2, -10, 2.5, 10));

// ? Згенеруйте рандомне число в діапазоні від 0 до 255;

const randomNumber = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

console.log(randomNumber);

// Math.floor(Math.random() * (max - min + 1)) + min;
