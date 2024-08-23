// https://jsonplaceholder.typicode.com/

import { getPosts } from './01-jsonPlaceholder-api.js';
import { createPostCard } from './render-functions.js';

const postsGalleryEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let currentPage = 1;

const renderPosts = async () => {
  try {
    const response = await getPosts(currentPage);

    const postsTemplate = response.data.map(post => createPostCard(post)).join('');

    postsGalleryEl.innerHTML = postsTemplate;

    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

renderPosts();

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;

    const response = await getPosts(currentPage);

    if (response.data.length === 0) {
      loadMoreBtnEl.classList.add('is-hidden');

      return;
    }

    const postsTemplate = response.data.map(post => createPostCard(post)).join('');

    postsGalleryEl.insertAdjacentHTML('beforeend', postsTemplate);
  } catch (err) {
    console.log(err);
  }
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
