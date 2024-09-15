import PropTypes from 'prop-types';
import { ListBtn, ListItem, Btn } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onBtnClick }) {
  return (
    <ListBtn>
      {options.map(option => (
        <ListItem key={option}>
          <Btn onClick={() => onBtnClick(option)}>{option}</Btn>
        </ListItem>
      ))}
    </ListBtn>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onBtnClick: PropTypes.func.isRequired,
};