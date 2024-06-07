/*
 * Арифметичні функції
 *
 * - Number.parseInt()
 * - Number.parseFloat()
 * - модуль Math
 */
// const res1 = Number.parseInt('23.34');
// console.log('res1:', res1);
// const top = '100.23px';
// const left = '5px';

// const res2 = Number.parseFloat(top);
// const res3 = Number.parseFloat(left);
// console.log('res2:', res2);
// console.log('res3:', res3);

/*
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/
// const userInput = prompt('Enter your age');
// const userInputToNumber = Number.parseInt(userInput);
// console.log('userInput:', userInputToNumber);

// const userInput = Number.parseInt(prompt('Enter your age'));
// console.log(userInput);

//? Дізнайтесь числове значення ширини елемента.
// let elementWidth = '50px';
// const refs = {
//   box: document.querySelector('.box'),
//   title: document.querySelector('.box-title'),
//   btn: document.querySelector('.box-btn'),
// };
// const boxWidthAsString = refs.box.style.width; // "400px"
// const boxWidth = Number.parseFloat(boxWidthAsString);
// console.log(boxWidth);

// const newBoxWidth = boxWidth + 100;
// console.log('newBoxWidth:', newBoxWidth);

// refs.box.style.width = `${newBoxWidth}px`;

// console.log(Number(userRange.value));
// console.log(userNumber.value);

// elementWidth = Number.parseInt(elementWidth);

// console.log('elementWidth: ', elementWidth);

//? Дізнайтесь числове значення висоти елемента.
// let elementHeight = '200.74px';

// elementHeight = Number.parseFloat(elementHeight);

// console.log('elementHeight: ', elementHeight);

//? Попросіть користувача ввести два числа, складіть їх та виведіть результат у консоль.
// const numA = Number(prompt('Enter first number'));
// const numB = Number(prompt('Enter second number'));

// const result = numA + numB; // concatenation

// console.log(result);

/*
 ? Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 ? значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 ? та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */
// console.log(Math);

let value = 27.9;
value = 1.3;
// value = Math.round(value);
// value = Math.floor(value);
// value = Math.ceil(value);

// console.log(value);
// console.log(32 / value);

// console.log('Min value:', Math.min(0, 1, -2, -10, 2.5, 10));
// console.log('Max value:', Math.max(0, 1, -2, -10, 2.5, 10));

// ? Згенеруйте рандомне число в діапазоні від 0 до 255;
// const randomValue = Math.random();
// console.log('randomValue:', randomValue);

// const randomNumber = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
// console.log('randomNumber:', randomNumber);
const min = 100;
const max = 120;
const randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
const randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
const randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('randomNum:', randomNum1);
console.log('randomNum:', randomNum2);
console.log('randomNum:', randomNum3);
