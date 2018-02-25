import React from 'react';

const ExternalLink = ({content, href}) => (
  <a href={href} target="_blank">
    {content}
  </a>
);

export default ExternalLink;
