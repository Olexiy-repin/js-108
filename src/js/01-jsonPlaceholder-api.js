import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getPosts = page => {
  const axiosOptions = {
    params: {
      _page: page,
      _limit: 20,
    },
  };

  return axios.get('/posts', axiosOptions);
};
