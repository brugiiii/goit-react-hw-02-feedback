import PropTypes from 'prop-types';
import './FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="optionsList">
      {options.map(option => (
        <li key={option} className="optionsList__item">
          <button
            type="button"
            onClick={onLeaveFeedback}
            className="optionsList__button"
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.elementType,
};

// І тут те саме запитання що описав у файлі Section.js
