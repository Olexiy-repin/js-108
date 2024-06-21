/*
 * - Стек викликів
 * - Порядок виконання
 */

//http://latentflip.com/loupe/

const fn1 = function () {
  console.log('fn1 execution');

  fn2();

  console.log('After fn2 execution');
};

const fn2 = function () {
  console.log('fn2 execution');

  fn3();

  console.log('After fn3 execution');
};

const fn3 = function () {
  console.log('fn3 execution');
};

fn1();
