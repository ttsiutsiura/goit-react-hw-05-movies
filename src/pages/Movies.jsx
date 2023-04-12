import { Link, useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { fetchMoviesByQuery } from 'service/moviesAPI';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null) {
      return;
    }

    fetchMoviesByQuery(query).then(data => setMovies(data));
  }, [query]);

  return (
    <>
      <SearchForm />
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
