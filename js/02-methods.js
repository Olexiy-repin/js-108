/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],

  changeName(newName) {
    this.name = newName;
  },

  updateRating(newRating) {
    this.rating = newRating;
  },
};

console.log(playlist);

playlist.changeName('Some name');
playlist.updateRating(4);

console.log(playlist);
