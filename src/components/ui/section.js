import React from 'react';

import Flex from './flex';
import Text from './text';

export default function Section({ description, title, children }) {
  return (
    <Flex as="section" flexDirection="column" mb={5}>
      <h2>{title}</h2>
      {description && <Text variant="description">{description}</Text>}
      {children}
    </Flex>
  );
}
