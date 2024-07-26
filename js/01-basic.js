/*
 * Деструктуризація об'єкта
 */

/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// console.log(user);

// const { firstName, lastName, age: userAge, isAdmin = false } = user;

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);
// console.log('userAge:', userAge);
// console.log('isAdmin:', isAdmin);

/*
 * Глибока деструктуризація об'єкта
 */

//? Без глибокої деструктуризації
// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log(user);

// const { username, skills } = user;
// const { html, css, js } = skills;

// console.log('username:', username);
// console.log('skills:', skills);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);

//? З глибокою деструктуризацією
// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const {
//   username,
//   skills: { html, css, js },
// } = user;

// console.log('username:', username);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);

/*
 * Деструктуризація масива
 */
//? ====================
// const fullNames = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// console.log(fullNames);

// const [userFullName1, , userFullName3] = fullNames;

// console.log('userFullName1:', userFullName1);
// console.log('userFullName3:', userFullName3);

//? ====================
// const getUserCoordinate = () => {
//   return [50.426857, 30.56368];
// };

// const userCoordinate = getUserCoordinate();

// const [lon, lat] = getUserCoordinate();

//* Операція rest при деструктуризації
// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// console.log(user);

// const { firstName, lastName, ...otherProps } = user;

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);
// console.log('otherProps:', otherProps);
