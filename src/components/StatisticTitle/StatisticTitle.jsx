import PropTypes from 'prop-types';
import styles from './statisticTitle.module.css';

const StatisticTitle = ({ title, children }) => {
  return (
    <div>
      <h2 className={styles.titleStatistics}>{title}</h2>
      {children}
    </div>
  );
};

StatisticTitle.prototype = {
  title: PropTypes.string.isRequired,
};

export default StatisticTitle;
