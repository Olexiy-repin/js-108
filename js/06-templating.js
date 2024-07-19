//* Різниця між властивостями textContent та innerHTML
const mainTitleEl = document.querySelector('.js-title');

// mainTitleEl.textContent = '<span>Main</span> Title';
// mainTitleEl.innerHTML = '<span>Main</span> Title';

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
  //* Повернення шаблоного рядка з розміткою

  return `
  <li class="gallery-item">
    <a href="#">
      <img src="${pictureInfo.url}" alt="${pictureInfo.alt}" width="${pictureInfo.width}" height="${pictureInfo.height}">
    </a>
  </li>
  `;
};

//* Створення масиву рядків із елементами
const galleryCardsTemplate = pictures.map(imgInfo => createGalleryCard(imgInfo)).join('');

//* Вставка елементів на сторінку (innerHTML/insertAdjacentHTML)
const galleryListEl = document.querySelector('.js-gallery');

// galleryListEl.innerHTML = galleryCardsTemplate;
galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);
