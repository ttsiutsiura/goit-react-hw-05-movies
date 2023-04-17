import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = 'api_key=74b70279ba32fa3bffd48db3ec6e3fd8';

export async function fetchTrending() {
  const response = await axios.get(`/trending/movie/week?${key}`);
  return response.data.results;
}

export async function fetchMovieDetails(id) {
  const response = await axios.get(`/movie/${id}?${key}`);
  return response.data;
}

export async function fetchMoviesByQuery(query) {
  const response = await axios.get(`/search/movie?query=${query}&${key}`);
  return response.data.results;
}

export async function fetchMovieCredits(id) {
  const response = await axios.get(`/movie/${id}/credits?${key}`);
  return response.data.cast;
}

export async function fetchMovieReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews?${key}`);
  return response.data.results;
}
