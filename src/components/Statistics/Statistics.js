import PropTypes from 'prop-types';
import './Statistics.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className="statsList">
      <li className="statList__item">
        Good: <span className="statList__value">{good}</span>
      </li>
      <li className="statList__item">
        Neutral: <span className="statList__value">{neutral}</span>
      </li>
      <li className="statList__item">
        Bad: <span className="statList__value">{bad}</span>
      </li>
      <li className="statList__item">
        Total: <span className="statList__value">{total}</span>
      </li>
      <li className="statList__item">
        Posetive feedback:{' '}
        <span className="statList__value">{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
