import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ url, children }) => (
  <a href={url} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);

ExternalLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]),
  url: PropTypes.string.isRequired,
};

export default ExternalLink;
