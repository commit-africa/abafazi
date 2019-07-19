import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Column = styled.div`
  display: inline-flex;
  background: ${( props ) => props.color || props.theme.blue };
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 50vh;
  align-items: ${({ align }) => {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      default:
        return 'center';
    }
  }};
  ${MEDIA.MIN_TABLET`
    width: 50%;
  `}
`;
