import React from 'react';
import PropTypes from 'prop-types';
import Section from '../components/section';
import { Container } from '../components/layout/container.css';

const ResourceSection = () => (
  <Section>
    <Container>Resources Section</Container>
  </Section>
);

ResourceSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResourceSection;
