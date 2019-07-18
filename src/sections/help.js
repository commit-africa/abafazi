import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Section from '../components/section';
import { Container } from '../components/layout/container.css';

const HelpSection = () => (
  <Section>
    <Container>Help Section</Container>
  </Section>
);

HelpSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HelpSection;
