/*
 * Масив об'єктів
 *
 * - Перебір масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.log(friends);

/*
? Пошук друга за іменем
*/
// function findFriendByName(allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name.toLowerCase() === friendName.toLowerCase()) {
//       return friend;
//     }
//   }

//   return `${friendName} не знайдено.`;
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
? Отримуємо імена всіх друзів
*/
// function getAllNames(allFriends) {
//   const allNames = [];

//   for (const friend of allFriends) {
//     allNames.push(friend.name);
//   }

//   return allNames;
// }

// console.log(getAllNames(friends));

/*
? Отримуємо імена тільки тих друзів, які зараз онлайн
*/

/*
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];
*/

// function getOnlineFriends(allFriends) {
//   const allNames = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       allNames.push(friend.name);
//     }
//   }

//   return allNames;
// }

// console.log(getOnlineFriends(friends));

/*
? Напишіть функцію calcTotalPrice(stones, stoneName),
? яка приймає масив об'єктів та рядок з назвою каменю.
? Функція рахує і повертає загальну вартість каміння з
? таким ім'ям, ціною та кількістю з об'єкта
*/

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Аконіт', price: 200, quantity: 2 },
];

function calcTotalPrice(allStones, stoneName) {
  console.log('allStones:', allStones);

  for (const stone of allStones) {
    if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
      return stone.price * stone.quantity;
    }
  }

  return `${stoneName} не знайдено.`;
}

console.log(calcTotalPrice(stones, 'Діамант'));
console.log(calcTotalPrice(stones, 'Смарагд'));
console.log(calcTotalPrice(stones, 'Аметист'));
