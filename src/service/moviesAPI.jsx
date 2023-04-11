import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '?api_key=74b70279ba32fa3bffd48db3ec6e3fd8';

export async function fetchTrending() {
  const response = await axios.get(`/trending/movie/week${key}`);
  //   console.log(response);
  return response.data.results;
}

export async function fetchMovieDetails(id) {
  const response = await axios.get(`/movie/${id}${key}`);
  // console.log(response.data);
  return response.data;
}

export async function fetchMovieGenres() {
  const response = await axios.get(`/genre/movie/list${key}`);
  // console.log(response);
  return response;
}
