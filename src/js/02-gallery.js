// https://unsplash.com/documentation

/*
<li class="gallery-card">
  <img class="gallery-img" src="" alt="" />
</li>
*/

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const createGalleryCardTemplate = imgInfo => {
  return `
  <li class="gallery-card">
    <img class="gallery-img" src="${imgInfo.urls.regular}" alt="${imgInfo.alt_description}" />
  </li>
  `;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedValue = searchFormEl.elements.user_query.value;

  fetch(
    `https://api.unsplash.com/search/photos?query=${searchedValue}&orientation=portrait&client_id=N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg&per_page=20`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      console.log(data);

      const galleryCardsTemplate = data.results.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');

      galleryEl.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
