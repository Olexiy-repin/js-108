/*
 * Блокова область видимості змінних
 */

// const a = 10;
const b = 130;

if (true) {
  const b = 20;

  // console.log('a: ', a);
  console.log('b: ', b);
}

if (true) {
  const b = 100;

  // console.log('a: ', a);
  console.log('b: ', b);
}

console.log('b: ', b);
