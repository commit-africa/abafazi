import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledSection = styled.div`
  display: flex;
  width: 100%;
  min-height: 50px;
`;

const Section = ({ children }) => <StyledSection>{children}</StyledSection>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
