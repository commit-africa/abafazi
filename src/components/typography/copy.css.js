import styled from 'styled-components';

export const BodyCopy = styled.p`
  color: ${props => props.color || props.theme.grey };
  font-size: 2em;
  font-weight: 100;
`;
