import { useState, useEffect } from 'react';
import {
  NavLink,
  useRouteMatch,
  useParams,
  useHistory,
  Route,
} from 'react-router-dom';

import Button from '../../components/Button';
import PageHeading from '../../components/PageHeading';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';

import ImageNotFound from '../../images/image_not_found.jpg';

import { Card, ListGroup, Container } from 'react-bootstrap';

import styles from './MovieDetailsPage.module.css';

const API_KEY = 'ab110991d3be565bd4f323a235f186b7';
const BASE_URL = 'https://api.themoviedb.org/3';

function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const history = useHistory();
  const { movieId } = useParams();

  const URL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(result => setMovie(result))
      .catch(err => console.warn(err));
  }, [URL]);

  function goBack() {
    const valueURL = history.location.pathname;

    if (valueURL.includes('cast') || valueURL.includes('reviews')) {
      history.go(-1);
    }

    history.goBack();
  }

  return (
    <section className={styles.Section}>
      <Container>
        <Button onClick={goBack}>&#10094; go back</Button>

        <PageHeading text={movie.title} />

        <Card className="bg-dark text-white">
          <Card.Img
            className={styles.Img}
            src={
              movie.backdrop_path
                ? `https://www.themoviedb.org/t/p/original${movie.backdrop_path}`
                : ImageNotFound
            }
            alt={movie.title}
          />
          <Card.ImgOverlay>
            <Card.Title>
              {movie.title}(
              {movie.release_date && movie.release_date.slice(0, 4)})
            </Card.Title>
            <Card.Text>
              <p>{`USER SCORE: ${Math.trunc(movie.vote_average * 10)}%`}</p>
            </Card.Text>
            <Card.Text>
              <p>OVERVIEW</p>
              {movie.overview}
            </Card.Text>
            <Card.Text>
              <p>GENRES</p>
              {movie.genres && movie.genres.map(g => g.name).join(', ')}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <div className={styles.AdditionalInformationContainer}>
          <h4>Additional information</h4>

          <ul className={styles.List}>
            <li className={styles.Item}>
              <NavLink to={`${url}/cast`} className={styles.Link}>
                <ListGroup.Item action variant="warning">
                  Cast
                </ListGroup.Item>
              </NavLink>
            </li>

            <li className={styles.Item}>
              <NavLink to={`${url}/reviews`} className={styles.Link}>
                <ListGroup.Item action variant="info">
                  Reviews
                </ListGroup.Item>
              </NavLink>
            </li>
          </ul>
        </div>

        <Route path={`${url}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${url}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Container>
    </section>
  );
}

export default MovieDetailsPage;
