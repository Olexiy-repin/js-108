/*
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

// const numbers = [5, 10, 15, 20, 25];

/*
? Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// const logItems = function (items) {
//   console.log(items);

//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// const printContactsInfo = (names, phones) => {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < nameList.length; i++) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// };

// printContactsInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');

/*
? Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// const calculateAverage = (...args) => {
//   let total = 0;

//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }

//   return total / args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
