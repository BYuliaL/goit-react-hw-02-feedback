import PropTypes from 'prop-types';
import styles from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={styles.mainTitle}>{title}</h2>
      {children}
    </div>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
};

export default Section;
