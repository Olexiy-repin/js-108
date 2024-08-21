/*
<li class="gallery-card">
  <img class="gallery-img" src="" alt="" />
</li>
*/

export const createGalleryCardTemplate = imgInfo => {
  return `
  <li class="gallery-card">
    <img class="gallery-img" src="${imgInfo.urls.regular}" alt="${imgInfo.alt_description}" />
  </li>
  `;
};
