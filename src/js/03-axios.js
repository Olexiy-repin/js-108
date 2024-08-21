import axios from 'axios';

/*
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 */

/*
 * Read (GET)
 */
// const getBooks = () => {
//   return axios.get('https://66bf835842533c403146647b.mockapi.io/books');
// };

// try {
//   const { data } = await getBooks();

//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

/*
 * Create (POST)
 */
// const addBook = newBook => {
//   return axios.post('https://66bf835842533c403146647b.mockapi.io/books', newBook);
// };

// try {
//   const response = await addBook({
//     title: 'Друга тестова книга з CSS',
//     author: 'Я',
//     genres: ['CSS'],
//     rating: 11,
//   });

//   console.log(response);
// } catch (err) {
//   console.log(err);
// }

/*
 * Update (PUT/PATCH)
 */
// const updateBookById = (dataForUpdate, bookId) => {
//   return axios.put(`https://66bf835842533c403146647b.mockapi.io/books/${bookId}`, dataForUpdate);
// };

// try {
//   const response = updateBookById({ title: 'Велика нова книга по NODEJS' }, 11);

//   console.log(response);
// } catch (err) {
//   console.log(err);
// }

/*
 * Delete (DELETE)
 */
// const removeBook = bookId => {
//   return axios.delete(`https://66bf835842533c403146647b.mockapi.io/books/${bookId}`);
// };

// try {
//   const response = removeBook(12);

//   console.log(response);
// } catch (err) {
//   console.log(err);
// }
