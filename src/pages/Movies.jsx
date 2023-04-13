import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { fetchMoviesByQuery } from 'service/moviesAPI';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === null) {
      return;
    }

    setStatus('pending');

    setTimeout(() => {
      fetchMoviesByQuery(query).then(data => {
        if (data.length === 0) {
          setStatus('rejected');
          return;
        }

        setMovies(data);
        setStatus('resolved');
      });
    }, 500);
  }, [query]);

  if (status === 'idle') {
    return (
      <>
        <SearchForm />
        <p>Enter a query please.</p>
      </>
    );
  }

  if (status === 'pending') {
    return (
      <>
        <SearchForm />
        <p>Loading...</p>
      </>
    );
  }

  if (status === 'rejected') {
    return (
      <>
        <SearchForm />
        <p>
          Sorry, there are no images matching your search query. Please try
          again.
        </p>
      </>
    );
  }
  if (status === 'resolved') {
    return (
      <>
        <SearchForm />
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
