import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './digit-display.css';
import { useInterval } from 'hooks/timing';

const DigitDisplay = ({ value: targetValue }) => {
  const [value, setValue] = useState(0);

  const distance = targetValue - value;
  const distancePerc = (distance / targetValue) * 100;

  const delay = distancePerc > 60 ? 5 : 50;

  useInterval(() => {
    const increment = Math.ceil(distance / 20);
    if (value < targetValue) setValue(value + increment);
    else if (value > targetValue) setValue(value - increment);
  }, delay);

  return <Container>{value}</Container>;
};

DigitDisplay.propTypes = {
  value: PropTypes.number,
};

export default DigitDisplay;
