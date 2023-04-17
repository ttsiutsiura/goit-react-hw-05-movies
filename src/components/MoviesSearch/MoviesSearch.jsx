import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { fetchMoviesByQuery } from 'service/moviesAPI';
import { MovieLink } from 'components/TrandingToday/TrandingToday.styled';
import { TrandingListItem } from 'components/TrandingToday/TrandingToday.styled';

export function MoviesSearch() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === null) {
      setStatus('idle');
      return;
    }

    fetchMoviesByQuery(query).then(data => {
      if (data.length === 0) {
        setStatus('rejected');
        return;
      }

      setMovies(data);
      setStatus('resolved');
    });
  }, [query]);

  if (status === 'idle') {
    return (
      <>
        <SearchForm />
        <p>Enter a query please.</p>
      </>
    );
  }

  if (status === 'rejected') {
    return (
      <>
        <SearchForm />
        <p>
          Sorry, there are no movies matching your search query. Please try
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
            <TrandingListItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </MovieLink>
            </TrandingListItem>
          ))}
        </ul>
      </>
    );
  }
}
