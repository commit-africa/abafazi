import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  width: 100vw;
  min-height: 50px;
`;

const Section = ({ children }) => <Container>{children}</Container>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
