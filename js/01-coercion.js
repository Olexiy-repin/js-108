/*
 * Перетворення типів: числа
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

// console.log(Number('5')); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number('Jacob')); // NaN
// console.log(Number('25px')); // NaN

const answer = prompt('Guess a number between 0 and 10:');
console.log('answer:', +answer);
const result = +answer === 4;
console.log('result:', result);

// console.log('5' * 2); // 10
// console.log('10' - 5); // 5
// console.log(5 + true); // 6
// console.log(5 - true); // 4
