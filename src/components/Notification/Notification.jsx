import PropTypes from 'prop-types';
import styles from './notification.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;
