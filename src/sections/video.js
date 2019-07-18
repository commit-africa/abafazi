import React from 'react';
import PropTypes from 'prop-types';
import Section from '../components/section';
import { Container } from '../components/layout/container.css';

const StorySection = () => (
  <Section>
    <Container>
      <Video
        videoTitle="Seeking Shelter"
        videoSrcURL="https://www.youtube.com/embed/9WDUmj_ooac"
      />
    </Container>
  </Section>
);

StorySection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StorySection;
