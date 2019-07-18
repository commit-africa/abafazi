import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './statistic.css';

const Statistic = ({ value, title, description }) => {
  return (
    <Container>
      {value}
      {title}
      {description}
    </Container>
  );
};

Statistic.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Statistic;
