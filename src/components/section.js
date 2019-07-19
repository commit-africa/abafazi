import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const StyledSection = styled.div`
  display: flex;
  width: 100%;
  min-height: 50px;
  justify-content: center;
  flex-direction: column;
  ${MEDIA.MIN_TABLET`
    flex-direction: row;
  `};
  background: ${({ background }) => background || '#fff'};
`;

const Section = ({ children, background }) => <StyledSection background={background}>{children}</StyledSection>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
