import { Title, SectionContainer } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      {title ? <Title>{title}</Title> : ''}
      {children}
    </SectionContainer>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
