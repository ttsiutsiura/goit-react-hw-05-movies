import { useEffect } from 'react';
import { fetchMovieCredits } from 'service/moviesAPI';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ActorCard } from './MovieCredits.styled';
import { ActorList } from './MovieCredits.styled';
import { ActorImage } from './MovieCredits.styled';

function MovieCredits() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(actors => setActors(actors.slice(0, 5)));
  }, [movieId]);

  if (actors.length === 0) {
    return <p>There is no information.</p>;
  }

  return (
    <ActorList>
      {actors.map(actor => (
        <ActorCard key={actor.id}>
          <ActorImage
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt=""
          />
          <b>{actor.name}</b>
          <p>Character: {actor.character}</p>
        </ActorCard>
      ))}
    </ActorList>
  );
}

export default MovieCredits;
