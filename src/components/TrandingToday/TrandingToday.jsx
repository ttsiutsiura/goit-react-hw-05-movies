import { useEffect, useState } from 'react';
import { fetchTrending } from 'service/moviesAPI';
import { Link, useLocation } from 'react-router-dom';

export function TrandingToday() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const location = useLocation();

  useEffect(() => {
    setStatus('pending');
    setTimeout(() => {
      fetchTrending()
        .then(data => {
          setMovies(data);
          setStatus('resolved');
        })
        .catch(error => setStatus('rejected'));
    }, 500);
  }, []);

  if (status === 'pending') {
    return (
      <>
        <h1>Trending today</h1>
        <p>Loading...</p>
      </>
    );
  }

  if (status === 'rejected') {
    return (
      <>
        <h1>Trending today</h1>
        <p>Something went wrong. We are sorry.</p>
      </>
    );
  }

  if (status === 'resolved') {
    return (
      <>
        <h1>Trending today</h1>
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
