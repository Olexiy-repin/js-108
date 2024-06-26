/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const film = {
  title: 'Harry Potter',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  rating: 9,
  isAdult: false,
  actors: ['Garrett Jacobs', 'Joshua Bridges', 'Rose Underwood'],
  translations: {
    ua: 'https//:ua',
    en: 'https//:en',
  },
};

console.log(film);

console.log(film.translations.en);

// console.log(film.title);
// console.log(film.actors);

// console.log(film['rating']);
// console.log(film['isAdult']);

// const filmKey = 'actors';

// console.log(film.filmKey);
// console.log(film[filmKey]);

// film.rating = 10;
// film.actors.push('Nancy Davis');

// film.test = 10;

// console.log(film);
