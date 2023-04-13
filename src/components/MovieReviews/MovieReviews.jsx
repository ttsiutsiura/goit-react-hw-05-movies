import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'service/moviesAPI';
import { useParams } from 'react-router-dom';

export function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams(null);

  useEffect(() => {
    // fetchMovieReviews(movieId).then(reviews => setReviews(reviews.slice(0, 3)));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>There are no reviews.</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
