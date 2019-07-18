import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextContainer } from './statistic.css';
import DigitDisplay from 'components/digit-display';

const Statistic = ({ value, unit, title, description }) => {
  return (
    <Container>
      <TextContainer scale={7} opacity={0.15}>
        <DigitDisplay value={value} />
        {unit}
      </TextContainer>
      <TextContainer scale={2} weight={600}>
        {title}
      </TextContainer>
      <TextContainer>{description}</TextContainer>
    </Container>
  );
};

Statistic.propTypes = {
  value: PropTypes.number,
  unit: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Statistic;
