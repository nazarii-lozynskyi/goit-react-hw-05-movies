import { NavLink } from 'react-router-dom';

import { Nav } from 'react-bootstrap';

import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <ul className={styles.List}>
      <li className={styles.Item}>
        <NavLink
          activeClassName={styles.ActiveLink}
          className={styles.Link}
          to="/"
          exact
        >
          Home
        </NavLink>
      </li>

      <li className={styles.Item}>
        <NavLink
          activeClassName={styles.ActiveLink}
          className={styles.Link}
          to="/movies"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
