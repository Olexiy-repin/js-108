/*
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean('')); // fasle
// console.log(Boolean('hello')); // true
// console.log(Boolean('false')); // true

/**
 * --------------------------------
 */

// console.log(5 && 4); // 4
// console.log(5 && 'mango'); // 'mango'
// console.log(0 && 'mango'); // 0

// const number = 21;

// if (number >= 0) {
//   if (number <= 20) {
//     console.log(number);
//   }
// }

// if (number >= 0 && number <= 20) {
//   console.log(number);
// }

/**
 * --------------------------------
 */

// console.log(null || 5); // 5
// console.log(0 || null); // null
// console.log(5 || null); // 5

// let firstName = prompt('Введіть ваше імʼя') || 'anonymous';

// console.log(firstName);

/**
 * --------------------------------
 */

// console.log(!5);
// console.log(!false);

/**
 * --------------------------------
 */

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi'); // 'kiwi'

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); // false

// console.log(null || (2 && 3) || 4); // 3
