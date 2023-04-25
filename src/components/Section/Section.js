import PropTypes from 'prop-types';
import './Section.css';

export const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

// Підскажіть будь ласка чи вірно описав проп тайпи, якщо я вірно зрозумів документацію, то для
// Реакт елементу, а у child я передаю саме реакт компонент, необхідно указувати PropTypes.element
