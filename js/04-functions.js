/*
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Порядок виконання коду
 * - Області видимості
 */

//TODO:====== Оголошуємо функцію =======/
function fnName(param1, param2) {
  // param1 = 'Mango'
  // param2 = 'Poly'

  // console.log(param1, param2);
  return;

  const newVar = '100px';
  console.log(newVar);
  // return undefined
}

function getCats(cat1, cat2) {
  // cat1 = 'Soda'
  // cat2 = 'Pushok'
  // console.log(cat2);
  return cat1;
}

//TODO:====== Використовуємо функцію =======/
const userName = fnName('Mango', 'Poly'); // виклик функції
// console.log('userName:', userName);

const catName = getCats('Soda', 'Pushok');
// console.log('catName:', catName);

/*
? Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника.
? Сторони прямокутника будуть переденні до параметрів sideA та sideB.
*/
//TODO:====== Оголошуємо функцію =======/
function getRectArea(sideA, sideB) {
  // sideA = 8
  // sideB = 11

  // const square = sideA * sideB;
  // return square;
  return sideA * sideB;
}
//TODO:====== Використовуємо функцію =======/
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
//TODO:====== Оголошуємо функцію =======/
function calcBMI(weight, height) {
  // weight = '88,3'
  // height = '1.75'

  const weightToNumber = Number(weight.replace(',', '.'));
  // console.log('calcBMI  weightToNumber:', weightToNumber);
  const heightToNumber = Number(height.replace(',', '.'));
  // console.log('calcBMI  heightToNumber:', heightToNumber);

  // const indexBMI = weightToNumber / Math.pow(heightToNumber, 2);
  const indexBMI = weightToNumber / heightToNumber ** 2;
  // console.log('calcBMI  indexBMI:', indexBMI);

  // const resIdx = indexBMI.toFixed(1);
  // console.log('calcBMI  resIdx:', resIdx);

  return indexBMI.toFixed(1);
}

//TODO:====== Використовуємо функцію =======/
const bmi = calcBMI('88,3', '1.75');

// console.log(bmi); // 28.8

/*
 ? Напиши функцію generateRandomInteger(min, max), яка буде генерувати
 ? число у відповідному діапазоні.
 ? Формула, генерація рандомного числа в діапазоні: Math.floor(Math.random() * (max - min + 1)) + min;
 */

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(generateRandomInteger(0, 255));

// setInterval(() => {
//   const [red, green, blue] = [
//     generateRandomInteger(0, 255),
//     generateRandomInteger(0, 255),
//     generateRandomInteger(0, 255),
//   ];

//   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }, 1000);
