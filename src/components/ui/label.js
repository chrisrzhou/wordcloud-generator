import React from 'react';
import { Label as ThemeUiLabel } from 'theme-ui';

import Flex from './flex';

export default function Label({
  children,
  htmlFor,
  direction = 'column',
  flex = '0 0 content',
}) {
  return (
    <Flex
      as={ThemeUiLabel}
      alignItems={direction === 'row' ? 'center' : 'flex-start'}
      color="secondary"
      flex={flex}
      flexDirection={direction}
      htmlFor={htmlFor}
      sx={{
        fontSize: 0,
        textTransform: 'uppercase',
      }}>
      {children}
    </Flex>
  );
}
