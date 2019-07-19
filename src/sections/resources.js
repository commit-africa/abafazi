import React from 'react';
import PropTypes from 'prop-types';
import Section from '../components/section';
import { Container } from '../components/layout/container.css';
import { SectionTitle } from '../components/typography/titles';

const ResourceSection = () => (
  <Section>
    <Container>
      <SectionTitle>Resources Section</SectionTitle>
    </Container>
  </Section>
);

export default ResourceSection;
