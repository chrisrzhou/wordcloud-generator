import React from 'react';

import Box from './box';
import Flex from './flex';
import Text from './text';

export default function Layout({ children }) {
  return (
    <Flex
      flexDirection="column"
      mx="auto"
      px={4}
      space={4}
      sx={{ maxWidth: 840, minHeight: '100vh' }}>
      <Flex
        as="header"
        alignItems="center"
        justifyContent="space-between"
        space={3}>
        <h1>Wordcloud generator</h1>
        <a href="https://github.com/chrisrzhou/wordcloud-generator/">Github</a>
      </Flex>
      <Text>
        <p>
          A modern wordcloud generator based on the{' '}
          <a href="https://www.jasondavies.com/wordcloud/">
            original wordcloud generator{' '}
          </a>{' '}
          by Jason Davies.
        </p>
        <p>
          Built using the{' '}
          <a href="https://github.com/chrisrzhou/react-wordcloud">
            <code>react-wordcloud</code>
          </a>{' '}
          and{' '}
          <a href="https://github.com/unified-doc/unified-doc">
            <code>unified-doc</code>
          </a>{' '}
          packages.
        </p>
      </Text>
      <Box as="main">{children}</Box>
      <Box as="footer" mt={6} py={3}>
        <Text as="a" href="https://chrisrzhou.io/" variant="small">
          © 2020 Chris Zhou
        </Text>
      </Box>
    </Flex>
  );
}
