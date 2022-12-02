import css from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div>
        {options.map(option => {
          return (
            <button
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
              className={css.btn}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: (PropTypes.object = {
    option: PropTypes.number.isRequired,
  }),
};
