import styled, { css } from 'styled-components';

export const Container = styled.span`
  ${props =>
    props.scale &&
    css`
      font-size: ${props.scale}em;
    `}
`;
