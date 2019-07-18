import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Section from '../components/section';
import { Container } from '../components/layout/container.css';

const StatsSection = () => (
  <Section>
    <Container>Stats Section</Container>
  </Section>
);

StatsSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StatsSection;
