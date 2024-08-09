/*
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const executor = (resolve, reject) => {
//   setTimeout(() => {
//     const isDone = Math.random() >= 0.5;

//     if (isDone) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 1000);
// };

// const promise = new Promise(executor);

// console.log(promise);

/*
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// promise
//   .finally(() => {
//     preloader.stop();

//     console.log('The End!');
//   })
//   .then(result => {
//     console.log(promise);

//     console.log(result);

//     return 'Hello';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(promise);

//     console.log(err);
//   });

//? Чи можна "перевиконати" проміс?
// const promise = new Promise((resolve, reject) => {
//   resolve(1);

//   resolve(2);
// });

// promise.then(result => {
//   console.log(result);
// });

//? Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//? Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error); // 'error'
//   });
