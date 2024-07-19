/*
 * Створюємо та додаємо колекцію
 */
const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

//* Функція для створення карточки createGalleryCard(cardInfo)
const createGalleryCard = pictureInfo => {
  // Створення li
  const galleryItemEl = document.createElement('li');

  galleryItemEl.classList.add('gallery-item');

  // Створення a
  const galleryLinkEl = document.createElement('a');

  galleryLinkEl.href = '#';

  galleryItemEl.append(galleryLinkEl);

  // Створення img
  const galleryImgEl = document.createElement('img');

  galleryImgEl.src = pictureInfo.url;
  galleryImgEl.alt = pictureInfo.alt;
  galleryImgEl.width = pictureInfo.width;
  galleryImgEl.height = pictureInfo.height;

  galleryLinkEl.append(galleryImgEl);

  return galleryItemEl;
};

//* Створення масиву елментів
const galleryCardsArr = pictures.map(imgInfo => createGalleryCard(imgInfo));

//* Вставка колекції карток на сторінку
const galleryListEl = document.querySelector('.js-gallery');

galleryListEl.append(...galleryCardsArr);
