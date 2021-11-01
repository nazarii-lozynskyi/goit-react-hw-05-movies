import { NavLink } from 'react-router-dom';

import Zoom from 'react-reveal/Zoom';

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
          <Zoom right cascade>
            Home
          </Zoom>
        </NavLink>
      </li>

      <li className={styles.Item}>
        <NavLink
          to="/movies"
          className={styles.Link}
          activeClassName={styles.ActiveLink}
        >
          <Zoom right cascade>
            Movies
          </Zoom>
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
