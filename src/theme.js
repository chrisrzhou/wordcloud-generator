export default {
	initialColorMode: 'light',
	colors: {
		text: '#333333',
		muted: '#efefef',
		background: '#fafafa',
		primary: '#0b5fff',
		modes: {
			dark: {
				text: '#ffffff',
				background: '#111111',
				foreground: '#333333',
				primary: '#1da1f2',
			},
		},
	},
	fonts: {
		body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
	},
	fontSizes: {
		xs: 10,
		s: 12,
		m: 14,
		l: 20,
		xl: 32,
	},
	fontWeights: {
		body: 400,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
	},
	sizes: {
		container: 768,
	},
	space: [0, 4, 8, 16, 32, 48],
	breakpoints: ['40em', '64em', '80em'],
	// Variants
	buttons: {
		primary: {
			color: 'background',
			bg: 'primary',
			'&:hover:enabled': {
				opacity: 0.9,
			},
		},
		secondary: {
			color: 'text',
			bg: 'background',
			'&:hover:enabled': {
				bg: 'muted',
			},
		},
	},
	forms: {
		label: {
			fontSize: 's',
			fontWeight: 'bold',
			textTransform: 'uppercase',
		},
	},
	// global styles
	styles: {
		root: {
			fontFamily: 'body',
			fontWeight: 'body',
			button: {
				cursor: 'pointer',
				'&:disabled': {
					cursor: 'default',
					opacity: 0.3,
				},
			},
		},
	},
};
