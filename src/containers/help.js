import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CardTitle, CardSubTitle } from 'components/typography/titles';

const Container = styled.article`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => (props.blue ? props.theme.blue : 'white')};
  padding: 5em 3em;
`;

export const HelpContainer = ({ title, description, blue }) => (
  <Container blue={blue}>
    <CardTitle>{title}</CardTitle>
    <CardSubTitle width="50%" textAlignCenter="center" color="grey">
      {description}
    </CardSubTitle>
    <div>
      <button>button</button>
    </div>
  </Container>
);

HelpContainer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  blue: PropTypes.string.isRequired,
  textAlignCenter: PropTypes.string.isRequired,
};
