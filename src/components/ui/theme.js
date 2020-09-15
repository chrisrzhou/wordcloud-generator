import 'tippy.js/dist/tippy.css';

const colors = {
  backdrop: 'rgba(0, 0, 0, 0.8)',
  background: '#ffffff',
  blockquote: '#fafafa',
  light: '#b9b9b9',
  muted: '#f0f0f0',
  primary: '#2e8fff',
  primaryTransparent: 'rgba(46, 143, 255, 0.3)',
  secondary: '#888888',
  text: '#111111',
};

const borders = {
  active: `1px solid ${colors.primary}`,
  border: `1px solid ${colors.light}`,
  muted: `1px solid ${colors.muted}`,
};

const fonts = {
  body: 'Roboto',
  heading: 'Roboto',
  monospace: 'Roboto Mono',
};

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];

const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
};

const lineHeights = {
  body: 1.5,
  heading: 1.125,
};

const radii = {
  s: '2px',
  m: '4px',
  l: '12px',
};

const shadows = {
  card: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  modal: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
};

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const zIndices = {
  modal: '10',
};

const styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    a: {
      color: 'secondary',
      cursor: 'pointer',
      textDecoration: 'none',
      ':focus, :hover': {
        opacity: 0.7,
      },
    },
    blockquote: {
      bg: 'blockquote',
      border: 'muted',
      borderRadius: 'm',
      color: 'secondary',
      px: 4,
      py: 2,
    },
    button: {
      cursor: 'pointer',
    },
    code: {
      bg: 'muted',
      borderRadius: 's',
      fontFamily: 'monospace',
      px: 1,
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      whiteSpace: 'pre-wrap',
      code: {
        bg: 'transparent',
        borderRadius: 'none',
        px: 0,
      },
    },
    'h1, h2, h3': {
      lineHeight: 'heading',
      mb: 3,
      mt: 4,
    },
    hr: {
      borderColor: 'muted',
      width: '100%',
    },
    li: {
      mt: 3,
    },
    'td, th': {
      outline: `1px solid ${colors.muted}`,
    },
    textarea: {
      fontFamily: 'monospace',
      fontSize: 1,
    },
    '[disabled]': {
      opacity: 0.2,
      pointerEvents: 'none',
    },
  },
};

export default {
  borders,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  space,
  zIndices,
  styles,
  // Variants
  buttons: {
    primary: {
      bg: 'primary',
      color: 'background',
      '&:hover:enabled': {
        opacity: '0.8',
      },
    },
    secondary: {
      bg: 'muted',
      color: 'text',
      '&:hover:enabled': {
        opacity: '0.8',
      },
    },
  },
  cards: {
    card: {
      bg: 'background',
      borderRadius: 'm',
      boxShadow: 'card',
      p: 3,
    },
  },
  text: {
    link: {
      color: 'secondary',
      fontSize: 0,
      ...styles.root.a,
    },
    small: {
      color: 'secondary',
      fontSize: 0,
    },
  },
};
