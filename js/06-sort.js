/*
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3, 10, 20];
// const sortedNumbers = numbers.toSorted();

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const letters = ['b', 'd', 'a', 'c', 'S', 'Y'];
// const sortedLetters = letters.toSorted();

// console.log('letters: ', letters);
// console.log('sortedLetters: ', sortedLetters);

/*
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// const numbers = [1, 6, 2, 3, 9, 10, 22, 34];
// const sortedNumbers = numbers.toSorted((currentEl, nextEl) => {
//   return nextEl - currentEl;
// });

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const letters = ['b', 'd', 'a', 'c', 'X', 'S', 'A'];
// const sortedLetters = letters.toSorted((currentEl, nextEl) => {
//   return currentEl.localeCompare(nextEl);
// });

// console.log('letters: ', letters);
// console.log('sortedLetters: ', sortedLetters);

/*
 * Сортування масиву об'єктів
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

//? За ігровим часом
// const sortedByBestPlayers = players.toSorted((currentEl, nextEl) => {
//   return nextEl.timePlayed - currentEl.timePlayed;
// });

// console.table(sortedByBestPlayers);

//? За першою літерою імені
// const sortedByName = players.toSorted((currentEl, nextEl) => {
//   return currentEl.name.localeCompare(nextEl.name);
// });

// console.table(sortedByName);
