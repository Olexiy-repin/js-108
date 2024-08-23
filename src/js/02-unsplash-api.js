import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhotos = (searchedQuery, page) => {
  const axiosOptions = {
    params: {
      query: searchedQuery,
      orientation: 'portrait',
      page: page,
      per_page: 20,
      client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
    },
  };

  return axios.get(`/search/photos`, axiosOptions);
};
