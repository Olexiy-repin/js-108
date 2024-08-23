// https://unsplash.com/documentation

import { createGalleryCardTemplate } from './render-functions.js';
import { fetchPhotos } from './02-unsplash-api.js';
import iziToast from 'izitoast';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const observeredEl = document.querySelector('.js-observerd-element');

let currentPage = 1;
let searchedValue = '';

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 1,
};

const observerCallBack = async entries => {
  console.log(entries);
  if (entries[0].isIntersecting) {
    try {
      currentPage++;

      const response = await fetchPhotos(searchedValue, currentPage);

      const galleryCardsTemplate = response.data.results
        .map(imgDetails => createGalleryCardTemplate(imgDetails))
        .join('');

      galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

      if (currentPage === response.data.total_pages) {
      }
    } catch (err) {
      console.log(err);
    }
  }
};

const observer = new IntersectionObserver(observerCallBack, observerOptions);

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedValue = searchFormEl.elements.user_query.value;

    currentPage = 1;

    const response = await fetchPhotos(searchedValue, currentPage);

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

    observer.observe(observeredEl);
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
