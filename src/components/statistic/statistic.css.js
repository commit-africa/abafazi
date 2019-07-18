import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: white;
  padding-top: 70px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props =>
    props.scale &&
    css`
      font-size: ${props.scale}em;
    `}
`;

export const TextContainer = styled.div`
  display: inline-block;
  margin: 5px 0;

  ${props =>
    props.scale &&
    css`
      font-size: ${props.scale}em;
    `}
    ${props =>
      props.color &&
      css`
        color: ${props.color};
      `}
    ${props =>
      props.opacity &&
      css`
        opacity: ${props.opacity};
      `}
    ${props =>
      props.weight &&
      css`
        font-weight: ${props.weight};
      `}
`;
