import css from './statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.listFeedback}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>PositivePercentage: {positivePercentage}</li>
      {/* <li>Total: {good + neutral + bad} </li> {good+neutral+bad} */}
    </ul>
  );
};
