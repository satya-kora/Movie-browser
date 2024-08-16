import axios from 'axios';

const API_KEY = '89b8dbe183c29e59e0db7c38c070bbc5'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data.results;
};
