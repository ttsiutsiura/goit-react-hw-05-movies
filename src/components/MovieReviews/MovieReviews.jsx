import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'service/moviesAPI';
import { useParams } from 'react-router-dom';
import { Reviewlist } from './MovieReviews.styled';
import { Review } from './MovieReviews.styled';

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(reviews => setReviews(reviews.slice(0, 3)));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>There are no reviews.</p>;
  }

  return (
    <Reviewlist>
      {reviews.map(review => (
        <Review key={review.id}>
          <b>{review.author}</b>
          <p>{review.content}</p>
        </Review>
      ))}
    </Reviewlist>
  );
}

export default MovieReviews;
