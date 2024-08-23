// https://unsplash.com/documentation

import { createGalleryCardTemplate } from './render-functions.js';
import { fetchPhotos } from './02-unsplash-api.js';
import iziToast from 'izitoast';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let currentPage = 1;
let searchedValue = '';
let cardHeight = 0;

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

    const galleryCardEl = galleryEl.querySelector('li');

    cardHeight = galleryCardEl.getBoundingClientRect().height;

    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;

    const response = await fetchPhotos(searchedValue, currentPage);

    const galleryCardsTemplate = response.data.results
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (currentPage === response.data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');
    }
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
