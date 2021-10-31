import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Card, Container } from 'react-bootstrap';

import styles from './Cast.module.css';

const API_KEY = 'ab110991d3be565bd4f323a235f186b7';
const BASE_URL = 'https://api.themoviedb.org/3';

function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  const URL = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(result => setCast(result.cast))
      .catch(err => console.warn(err));
  }, []);

  return (
    <Container>
      <ul className={styles.List}>
        {cast.map(actor => {
          return (
            <li key={actor.id} className={styles.Item}>
              <Card style={{ width: '14rem' }}>
                <Card.Img
                  variant="top"
                  src={
                    actor.profile_path
                      ? `https://www.themoviedb.org/t/p/w500/${actor.profile_path}`
                      : ''
                  }
                  alt={actor.name}
                />
                <Card.Body>
                  <Card.Title>{actor.name}</Card.Title>
                  <Card.Text>Character: {actor.character}</Card.Text>
                </Card.Body>
              </Card>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

Cast.protoType = {
  movieId: PropTypes.string,
};

export default Cast;
