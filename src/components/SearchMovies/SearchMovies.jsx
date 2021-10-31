import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

import { InputGroup, Button, FormControl } from 'react-bootstrap';

import styles from './SearchMovies.module.css';

function SearchMovies({ onSubmit }) {
  const location = useLocation();
  const [value, setValue] = useState('');

  useEffect(() => {
    const queryValue = new URLSearchParams(location.search).get('query');

    if (queryValue === null) {
      return;
    }

    setValue(queryValue);
  }, [location.search]);

  const handleChange = e => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(value.trim().toLowerCase());
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search movies ..."
          aria-label="Search movies"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </form>
  );
}

export default SearchMovies;
