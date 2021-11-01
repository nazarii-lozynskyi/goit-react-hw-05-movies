import Bounce from 'react-reveal/Bounce';

import styles from './PageHeading.module.css';

function PageHeading({ text }) {
  return (
    <h1 className={styles.Heading}>
      <Bounce right cascade>
        {text}
      </Bounce>
    </h1>
  );
}

export default PageHeading;
