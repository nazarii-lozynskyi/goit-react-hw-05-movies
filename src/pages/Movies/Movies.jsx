import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import PageHeading from '../../components/PageHeading';
import SearchMovies from '../../components/SearchMovies';
import NotFound from '../../components/NotFound';

import styles from './Movies';

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

      {movies && (
        <ul>
          {movies.length ? (
            movies.map(movie => {
              return (
                <li key={movie.id} className={styles.item}>
                  <Link to={`${url}/${movie.id}`} className={styles.link}>
                    {movie.title}
                  </Link>
                </li>
              );
            })
          ) : (
            <NotFound value={query} />
          )}
        </ul>
      )}
    </section>
  );
}
export default Movies;
