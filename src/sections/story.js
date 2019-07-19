import React from 'react';
import PropTypes from 'prop-types';
import Section from '../components/section';
import { Container } from '../components/layout/container.css';
import { SectionTitle } from '../components/typography/titles';

const StorySection = () => (
  <Section background="#e9eef0">
    <Container>
      <SectionTitle>The Story</SectionTitle>
    </Container>
  </Section>
);

export default StorySection;
