import { useEffect } from 'react';
import { fetchMovieCredits } from 'service/moviesAPI';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export function MovieCredits() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(actors => setActors(actors.slice(0, 7)));
  }, [movieId]);

  if (actors.length === 0) {
    return <p>There is no information.</p>;
  }

  return (
    <ul>
      {actors.map(actor => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt=""
          />
          <p>{actor.name}</p>
          <p>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
}
