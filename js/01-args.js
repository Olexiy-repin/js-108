/*
 * - Function expression
 * - Псевдомасив arguments и Array.from
 */

// Function declaration
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 20));

// Function expression
// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(10, 20));

// arguments
// const foo = function () {
//   const args = Array.from(arguments);

//   console.log(arguments);

//   args.push(100);

//   console.log(args);

//   // console.log(arguments[0]);
//   // console.log(arguments[1]);
// };

// foo(10, 'Hello', true, 20);

/*
? Напиши функцію add для складання довільної кількості аргументів (чисел)
*/

// const add = function () {
//   console.log(arguments);

//   let total = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     // total = total + arguments[i];
//     total += arguments[i];
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
? Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
? та розраховує середнє арефметичне.
*/

// const calculateAverage = function () {
//   console.log(arguments);

//   let total = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     // total = total + arguments[i];
//     total += arguments[i];
//   }

//   return total / arguments.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
