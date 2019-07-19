import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc((100vw - 30px) * 619 / 1100);
`;

const Video = ({ videoSrcURL, videoTitle }) => (
  <Container>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      width="100%"
      height="100%"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </Container>
);

Video.propTypes = {
  videoSrcURL: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
};

export default Video;
