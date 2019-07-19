import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const DefaultButton = styled.button`
  outline: 0;
  font: inherit;
  cursor: pointer;
  background: none;
  white-space: pre;
  line-height: normal;
  display: inline-block;
  box-sizing: border-box;
  overflow: visible;
  user-select: none;
  text-align: center;
  text-decoration: none;
  -webkit-appearance: button;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  margin: 0;
  padding: 0.8em;
  border-radius: 0.3em;
  position: relative;
  transition: all 0.5s ease;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  color: ${props => props.theme.white};
  background-color: 1px solid ${props => props.theme.blue};
  border: 1px solid ${props => props.theme.white};

  &:hover {
    color: ${props => props.theme.blue};
    background-color: ${props => props.theme.white};
  }

  ${props =>
    props.outline &&
    css`
      color: ${props => props.theme.blue};
      border: 1px solid ${props => props.theme.blue};

      &:hover {
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.blue};
      }
    `}
`;

export const Button = ({ onClickHandler, children, outline }) => {
  return (
    <DefaultButton outline={outline} onClick={onClickHandler}>
      {children}
    </DefaultButton>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  outline: PropTypes.bool,
  onClickHandler: PropTypes.func,
};

export default Button;
