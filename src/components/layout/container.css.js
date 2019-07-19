import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  margin: 0 15px;
  background: red;
  ${MEDIA.MIN_TABLET`
    width: 768px;
    background: blue;
  `};

  ${MEDIA.MIN_SMALL_DESKTOP`
    width: 992px;
    background: pink;
  `};

  ${MEDIA.MIN_DESKTOP`
    width: 1200px;
    background: green;
  `};

  ${MEDIA.MIN_LARGE_DESKTOP`
    width: 1366px;
    background: green;
  `};
`;
