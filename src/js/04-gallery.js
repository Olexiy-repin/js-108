// https://unsplash.com/documentation

import { createGalleryCardTemplate } from './render-functions.js';
import { fetchPhotos } from './unsplash-api.js';

import iziToast from 'izitoast';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    const searchedValue = searchFormEl.elements.user_query.value;

    const response = await fetchPhotos(searchedValue);

    console.log(response);

    if (response.data.results.length === 0) {
      iziToast.error({
        message: 'За вашим запитом, зображень не знайдено!',
        position: 'topRight',
      });

      galleryEl.innerHTML = '';
      searchFormEl.reset();

      return;
    }

    const galleryCardsTemplate = response.data.results
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');

    galleryEl.innerHTML = galleryCardsTemplate;
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
