import React from 'react';

import Box from '../box';

export default function ColorBox({ color, size = 20, text, onClick }) {
  return (
    <Box
      mb={2}
      mr={2}
      sx={{
        alignItems: 'center',
        backgroundColor: color,
        borderRadius: 'm',
        cursor: 'pointer',
        display: 'flex',
        flex: '0 0 auto',
        justifyContent: 'center',
        height: size,
        width: size,
        '&:hover': {
          opacity: '0.8',
        },
      }}
      onClick={onClick}>
      {text}
    </Box>
  );
}
