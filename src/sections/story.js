import React from 'react';
import PropTypes from 'prop-types';
import Section from '../components/section';
import { Container } from '../components/layout/container.css';

const StorySection = () => (
  <Section>
    <Container>Story Section</Container>
  </Section>
);

StorySection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StorySection;
