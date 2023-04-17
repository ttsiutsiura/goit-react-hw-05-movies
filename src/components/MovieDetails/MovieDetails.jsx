import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'service/moviesAPI';
import { MainInfoWrapper } from './MovieDetails.styled';
import { MoviePoster } from './MovieDetails.styled';
import { BackLink } from './MovieDetails.styled';
import { TrandingListItem } from 'components/TrandingToday/TrandingToday.styled';
import { MovieLink } from 'components/TrandingToday/TrandingToday.styled';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieDetails(movieId).then(details => {
      setMovieDetails(details);
    });
  }, [movieId]);

  return (
    <>
      <BackLink to={backLink}>Go back</BackLink>
      <MainInfoWrapper>
        <MoviePoster
          alt=""
          src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
        ></MoviePoster>
        <div>
          <h1>
            {movieDetails.title
              ? `${movieDetails.title} ${movieDetails.release_date.slice(0, 4)}`
              : 'Title'}
          </h1>
          <p>
            {movieDetails.vote_average !== undefined &&
              `User Score: ${movieDetails.vote_average.toFixed(1)}/10`}
          </p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres !== undefined &&
              movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </MainInfoWrapper>

      <h3>Additional info:</h3>
      <ul>
        <TrandingListItem>
          <MovieLink to={'credits'}>Credits</MovieLink>
        </TrandingListItem>
        <TrandingListItem>
          <MovieLink to={'reviews'}>Reviews</MovieLink>
        </TrandingListItem>
      </ul>
      <Outlet />
    </>
  );
}

export default MovieDetails;
