import React from 'react';

import Box from './box';

export default function Flex({
  children,
  alignItems = undefined,
  flex = undefined,
  flexDirection = undefined,
  flexWrap = undefined,
  justifyContent = undefined,
  space = 3,
  sx = {},
  ...rest
}) {
  const marginDirection = flexDirection === 'column' ? 'mb' : 'mr';

  return (
    <Box
      sx={{
        ...sx,
        alignItems,
        display: 'flex',
        flex,
        flexDirection,
        flexWrap,
        justifyContent,
        '> :not(:last-child)': {
          [marginDirection]: space,
        },
      }}
      {...rest}>
      {children}
    </Box>
  );
}
