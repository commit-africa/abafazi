import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 2em;
  color: ${props => props.theme.grey};
`;

export const SubTitle = styled.p`
  font-size: 2em;
  color: ${props => props.theme.grey};
`;

export const CardTitle = styled.h3`
  font-size: 2.2em;
  font-weight: 600;
  margin-bottom: 0.4em;
  color: ${props => props.theme[props.color] || props.theme.darkGrey};
`;

export const CardSubTitle = styled.p`
  font-size: 1.5em;
  font-weight: 100;
  color: ${props => props.theme[props.color] || props.theme.white};
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.textAlignCenter};
`;
