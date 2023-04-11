import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'service/moviesAPI';

export function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});

  const { movieId } = useParams(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(details => {
      setMovieDetails(details);
    });
  }, [movieId]);

  console.log(movieDetails);
  return (
    <>
      <img
        alt=""
        src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
      ></img>
      <h1>
        {movieDetails.title}{' '}
        {`(${
          movieDetails.release_date !== undefined &&
          movieDetails.release_date.slice(0, 4)
        })`}
      </h1>
      <p>
        User Score:{' '}
        {movieDetails.vote_average !== undefined &&
          movieDetails.vote_average.toFixed(1)}
      </p>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h2>Genres</h2>
      <p>
        {movieDetails.genres !== undefined &&
          movieDetails.genres.map(genre => genre.name).join(', ')}
      </p>
    </>
  );
}
