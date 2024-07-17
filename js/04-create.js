/*
 * Створення та додавання елементів
 */

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

// Створення li
const galleryItemEl = document.createElement('li');

galleryItemEl.classList.add('gallery-item', 'js-gallery-item');

// Створення a
const galleryLinkEl = document.createElement('a');

galleryLinkEl.href = '#';
galleryLinkEl.classList.add('js-gallery-link');
galleryItemEl.append(galleryLinkEl);

// Створення img
const galleryImgEl = document.createElement('img');

galleryImgEl.src = 'https://picsum.photos/id/237/200/300';
galleryImgEl.alt = 'Labrador';
galleryLinkEl.append(galleryImgEl);

console.dir(galleryItemEl);

// Вставка карточки на сторінку
const galleryListEl = document.querySelector('.js-gallery');

galleryListEl.append(galleryItemEl);
