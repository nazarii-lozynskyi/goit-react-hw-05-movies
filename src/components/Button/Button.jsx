import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({ onClick, children }) {
  return (
    <button type="button" className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
}

Button.protoType = {
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default Button;
