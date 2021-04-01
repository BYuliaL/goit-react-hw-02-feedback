import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.buttonsContainer}>
      {options.map(option => (
        <button
          type="button"
          onClick={onLeaveFeedback}
          key={option}
          name={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
