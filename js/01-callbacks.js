/*
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// const fn1 = function (callback) {
//   // let callback = function () {console.log('fn2 execution')};

//   console.log('fn1 execution');

//   callback();
// };

// const fn2 = function () {
//   console.log('fn2 execution');
// };

// fn1(fn2);

/*
? Функція calc(a, b, callback)
 */

// const calc = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (valueA, valueB) {
//   return valueA + valueB;
// };

// const division = function (valueA, valueB) {
//   return valueA / valueB;
// };

// calc(10, 20, add);
// calc(10, 2, division);

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив,
? а другим - функцію, яка застосовується до кожного елемента масиву. Функція
? each повинна повернути новий масив, елементами якого будуть
? результати виклику коллбека.
 */

// function each(array, callback) {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (arrayEl) {
//     return arrayEl * 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (arrayEl) {
//     return arrayEl - 10;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (arrayEl) {
//     return Math.sqrt(arrayEl);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (arrayEl) {
//     return Math.ceil(arrayEl);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (arrayEl) {
//     return Math.floor(arrayEl);
//   })
// );
