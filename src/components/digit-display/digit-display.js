import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './digit-display.css';
import { useInterval } from 'hooks/timing';

const DigitDisplay = ({ value: targetValue, scale }) => {
  const [value, setValue] = useState(0);

  const distance = Math.abs(targetValue - value);
  const distancePerc = (distance / targetValue) * 100;

  const delay = distancePerc > 60 ? 2 : 50;

  useInterval(() => {
    const increment = Math.min(Math.ceil(distance / 10), distance);
    if (value < targetValue) setValue(value + increment);
    else if (value > targetValue) setValue(value - increment);
  }, delay);

  return <Container scale={scale}>{value}</Container>;
};

DigitDisplay.propTypes = {
  value: PropTypes.number,
  scale: PropTypes.number,
};

export default DigitDisplay;
