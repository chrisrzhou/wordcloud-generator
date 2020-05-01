import React from 'react';
import { Label as ThemeUiLabel } from 'theme-ui';

export default function Label({ children, direction = 'column', htmlFor }) {
	return (
		<ThemeUiLabel
			htmlFor={htmlFor}
			sx={{
				alignItems: direction === 'row' ? 'center' : 'flex-start',
				display: 'flex',
				flex: '0 0 content',
				flexDirection: direction,
				fontSize: 'xs',
				fontWeight: 'bold',
				textTransform: 'uppercase',
			}}
			my={3}>
			{children}
		</ThemeUiLabel>
	);
}
