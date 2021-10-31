import PageHeading from '../../components/PageHeading';
import SearchMovies from '../../components/SearchMovies';
import styles from './Movies';

function Movies() {
  return (
    <>
      <PageHeading text="Search movie"></PageHeading>

      <SearchMovies />
    </>
  );
}
export default Movies;
