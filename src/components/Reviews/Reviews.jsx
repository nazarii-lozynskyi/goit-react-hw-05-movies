import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';

import styles from './Reviews.module.css';

const API_KEY = 'ab110991d3be565bd4f323a235f186b7';
const BASE_URL = 'https://api.themoviedb.org/3';

function Reviews({ movieId }) {
  const URL = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(result => setReviews(result.results))
      .catch(error => console.warn(error));
  }, [URL]);

  return (
    <ul className={styles.list}>
      {reviews.length ? (
        reviews.map(review => {
          return (
            <li key={review.id}>
              <p className={styles.Author}>
                Author:{' '}
                <span className={styles.AuthorNickname}>
                  <Bounce left cascade>
                    {review.author}
                  </Bounce>
                </span>
              </p>

              <p className={styles.Content}>
                <LightSpeed left cascade>
                  {review.content}
                </LightSpeed>
              </p>

              <br />
            </li>
          );
        })
      ) : (
        <LightSpeed left cascade>
          <p>We don't have any reviews for this movie</p>
        </LightSpeed>
      )}
    </ul>
  );
}

Reviews.protoType = {
  movieId: PropTypes.string,
};

export default Reviews;
