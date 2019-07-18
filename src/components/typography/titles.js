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
  font-size: 2em;
  margin-bottom: 0.4em;
  color: ${props => props.theme.darkGrey};
`;

export const CardSubTitle = styled.p`
  font-size: 1.3em;
  font-weight: 100;
  color: ${props => props.theme[props.color] || 'white'};
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.textAlignCenter};
`;
