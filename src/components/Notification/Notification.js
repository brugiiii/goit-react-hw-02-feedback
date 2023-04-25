import PropTypes from 'prop-types';
import './Notification.css';

export const Notification = ({ message }) => {
  return <h2 className="title">{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
