/*
 * LocalStorage
 */

// console.log(window.localStorage);

/*
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

// localStorage.setItem('test', 'Hello world!');

// const product = {
//   title: 'Some title',
//   description: 'Lorem ipsum dolor sit amet.',
//   price: 10000,
// };

// localStorage.setItem('product', JSON.stringify(product));

/*
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// const testFromLS = localStorage.getItem('test');

// console.log(testFromLS);

// const productFromLS = JSON.parse(localStorage.getItem('product'));

// console.log(productFromLS);
// console.log(productFromLS.price);

/*
 * Видалення
 */

// localStorage.removeItem('test');
// localStorage.removeItem('product');

// localStorage.clear();
