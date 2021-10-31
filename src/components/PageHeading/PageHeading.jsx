import styles from './PageHeading.module.css';

function PageHeading({ text }) {
  return <h1 className={styles.Heading}>{text}</h1>;
}

export default PageHeading;
