import { InputGroup, Button, FormControl } from 'react-bootstrap';

import styles from './SearchMovies.module.css';

function SearchMovies() {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search movies ..."
        aria-label="Search movies"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        Search
      </Button>
    </InputGroup>
  );
}

export default SearchMovies;
