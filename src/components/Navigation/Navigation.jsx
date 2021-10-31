import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <ul className={styles.List}>
      <li className={styles.Item}>
        <NavLink
          exact
          to="/"
          className={styles.Link}
          activeClassName={styles.ActiveLink}
        >
          Home
        </NavLink>
      </li>

      <li className={styles.Item}>
        <NavLink
          to="/movies"
          className={styles.Link}
          activeClassName={styles.ActiveLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
