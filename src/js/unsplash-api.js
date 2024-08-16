const BASE_URL = 'https://api.unsplash.com';

export const fetchPhotos = searchedQuery => {
  const urlParams = new URLSearchParams({
    query: searchedQuery,
    orientation: 'portrait',
    per_page: 20,
    client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
  });

  return fetch(`${BASE_URL}/search/photos?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
