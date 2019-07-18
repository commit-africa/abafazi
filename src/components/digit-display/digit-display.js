import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IO from 'components/io';

import { Container } from './digit-display.css';
import { useInterval } from 'hooks/timing';

const DigitDisplay = ({ value: targetValue, scale, hasBeenVisible }) => {
  const [value, setValue] = useState(0);

  const distance = Math.abs(targetValue - value);
  const distancePerc = (distance / targetValue) * 100;

  const delay = distancePerc > 60 ? 2 : 50;

  useInterval(() => {
    if (!hasBeenVisible) return;
    const increment = Math.min(
      Math.ceil(distance / Math.min(10, targetValue)),
      distance
    );
    if (value < targetValue) setValue(value + increment);
    else if (value > targetValue) setValue(value - increment);
  }, delay);

  return <Container scale={scale}>{value}</Container>;
};

DigitDisplay.propTypes = {
  value: PropTypes.number,
  scale: PropTypes.number,
  hasBeenVisible: PropTypes.bool,
};

const VisibilityWrappedDigitDisplay = props => (
  <IO rootMargin="-10px">
    {({ hasBeenVisible }) => (
      <DigitDisplay {...props} hasBeenVisible={hasBeenVisible} />
    )}
  </IO>
);

VisibilityWrappedDigitDisplay.propTypes = {
  value: PropTypes.number,
  scale: PropTypes.number,
};

export default VisibilityWrappedDigitDisplay;
