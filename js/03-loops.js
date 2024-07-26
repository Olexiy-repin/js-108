/*
 * Деструктуризація об'єкта в циклі
 */

// const users = [
//   {
//     username: 'Kate',
//   },
//   {
//     username: 'Alex',
//   },
//   {
//     username: 'Mark',
//   },
// ];

// console.log(users);

/*
 ? Без деструктуризації
 */

// for (const user of users) {
//   console.log(user.username);
// }

/*
 ? З деструктуризацією
 */

// for (const { username } of users) {
//   /*
//     1 Ітерація
//       const { username } =   {username: 'Kate',}
//     2 Ітерація
//       const { username } =   {username: 'Alex',}
//     3 Ітерація
//       const { username } =   {username: 'Mark',}
//   */

//   console.log(username);
// }
