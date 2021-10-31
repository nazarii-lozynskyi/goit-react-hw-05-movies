import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHeading from '../../components/PageHeading';

import { Card, Button, Container } from 'react-bootstrap';

import styles from './HomePage.module.css';

const API_KEY = 'ab110991d3be565bd4f323a235f186b7';
const BASE_URL = 'https://api.themoviedb.org/3';
const URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.warn(err));
  }, []);
  return (
    <section>
      <Container>
        <PageHeading text="Trending today" />

        <ul className={styles.List}>
          {movies.map(movie => {
            return (
              <li key={movie.id} className={styles.Item}>
                <Card style={{ width: '14rem' }}>
                  <Link to={`movies/${movie.id}`} className={styles.Link}>
                    <Card.Img
                      variant="top"
                      src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
                    />
                  </Link>
                  <Card.Body>
                    <Link to={`movies/${movie.id}`} className={styles.Link}>
                      <Button variant="primary">Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default HomePage;
