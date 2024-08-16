/*
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */

// const BASE_URL = 'https://66bf835842533c403146647b.mockapi.io';

/*
 * Read (GET)
 */
// const getBooks = () => {
//   return fetch(`${BASE_URL}/books`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// const getBookById = bookId => {
//   return fetch(`${BASE_URL}/books/${bookId}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// getBooks()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// getBookById(1)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
/*
 * Create (POST)
 */
// const addBook = book => {
//   const fetchOptions = {
//     method: 'POST',
//     body: JSON.stringify(book),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return fetch(`${BASE_URL}/books`, fetchOptions).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// addBook({
//   title: 'Тестова книга з CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(book => {
//     console.log(book);
//   })
//   .catch(error => console.log(error));

// addBook({
//   title: 'Тестова книга з HTML',
//   author: 'Я',
//   genres: ['HTML'],
//   rating: 7,
// })
//   .then(book => {
//     console.log(book);
//   })
//   .catch(error => console.log(error));

/*
 * Update (PUT/PATCH)
 */
// const updateBookById = (bookInfoForUpdate, bookId) => {
//   const fetchOptions = {
//     method: 'PUT',
//     body: JSON.stringify(bookInfoForUpdate),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

// return fetch(`${BASE_URL}/books/${bookId}`, fetchOptions).then(response => {
//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();
// });
// };

// updateBookById({ title: 'Велика нова книга по NODEJS' }, 11)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// updateBookById({ rating: 4, author: 'Манго' }, 12)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
 * Delete (DELETE)
 */
// const deleteBookById = bookId => {
//   const fetchOptions = {
//     method: 'DELETE',
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, fetchOptions).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// deleteBookById(12)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// deleteBookById(11)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
