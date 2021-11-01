import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import PageHeading from '../../components/PageHeading';
import SearchMovies from '../../components/SearchMovies';
import NotFound from '../../components/NotFound';

import ImageNotFound from '../../images/image_not_found.jpg';

import { Card, Container } from 'react-bootstrap';

import Roll from 'react-reveal/Roll';

import styles from './Movies.module.css';

const API_KEY = 'ab110991d3be565bd4f323a235f186b7';
const BASE_URL = 'https://api.themoviedb.org/3';

function Movies() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&l&query=${query}&include_adult=false`;

  useEffect(() => {
    const queryValue = new URLSearchParams(location.search).get('query');

    if (queryValue === null) {
      return;
    }

    setQuery(queryValue);
  }, [location.search]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    fetch(URL)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(error => console.warn(error));
  }, [URL, query]);

  const changeSearchValue = value => {
    history.push({ ...location, search: `query=${value}` });

    setQuery(value);
  };
  return (
    <section>
      <PageHeading text="Search movie"></PageHeading>

      <SearchMovies onSubmit={changeSearchValue} />
      <Container>
        {movies && (
          <ul className={styles.List}>
            {movies.length ? (
              movies.map(movie => {
                return (
                  <Roll right cascade>
                    <li key={movie.id} className={styles.Item}>
                      <Card style={{ width: '18rem' }}>
                        <Link to={`${url}/${movie.id}`} className={styles.Link}>
                          <Card.Img
                            variant="top"
                            src={
                              movie.poster_path
                                ? `https://www.themoviedb.org/t/p/w500${movie.poster_path}`
                                : ImageNotFound
                            }
                          />
                        </Link>
                        <Card.Body>
                          <Link
                            to={`${url}/${movie.id}`}
                            className={styles.Link}
                          >
                            <Card.Title>{movie.title}</Card.Title>
                          </Link>
                        </Card.Body>
                      </Card>
                    </li>
                  </Roll>
                );
              })
            ) : (
              <NotFound value={query} />
            )}
          </ul>
        )}
      </Container>
    </section>
  );
}
export default Movies;
