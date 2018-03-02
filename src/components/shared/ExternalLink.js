import React from 'react';

export default ({content, href}) => (
  <a href={href} target="_blank">
    {content}
  </a>
);
