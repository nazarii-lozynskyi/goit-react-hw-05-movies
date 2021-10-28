import styles from './AppBar.module.css';

import Navigation from '../Navigation';

export default function AppBar() {
  return (
    <header className={styles.Header}>
      <Navigation />
    </header>
  );
}
