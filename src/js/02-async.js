/*
 * Синтаксис async/await
 */

// const sum = async (a, b) => {
//   return a + b;
// };

// sum(10, 20).then(result => {
//   console.log(result);
// });

// https://66bf835842533c403146647b.mockapi.io

//? Запит за книгами і обробка відповіді через async/await
// const fetchBooks = async () => {
//   try {
//     const response = await fetch('https://66bf835842533c403146647b.mockapi.io/bo');

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchBooks();

//? Запит за книгами і обробка відповіді через async/await та then()/catch()
// const fetchBooks = async () => {
//   try {
//     const response = await fetch('https://66bf835842533c403146647b.mockapi.io/books');

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json();

//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchBooks()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? Запит за книгами і обробка відповіді через await, на верхньому рівні модуля
const fetchBooks = async () => {
  try {
    const response = await fetch('https://66bf835842533c403146647b.mockapi.io/books');

    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const data = await fetchBooks();

console.log(data);
