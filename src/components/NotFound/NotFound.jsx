import PropTypes from 'prop-types';
import image from '../../images/error404.png';
import styles from './NotFound.module.css';

function NotFound({ value }) {
  return (
    <div>
      <img src={image} alt="Not found" className={styles.image} />
      <p className={styles.text}>Not found "{value}" :(</p>
    </div>
  );
}

NotFound.protoType = {
  value: PropTypes.string,
};

export default NotFound;
