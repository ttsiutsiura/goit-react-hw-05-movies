import { useEffect, useState } from 'react';
import { fetchTrending } from 'service/moviesAPI';
import { Link } from 'react-router-dom';

export function TrandingToday() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(data => setMovies(data));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
