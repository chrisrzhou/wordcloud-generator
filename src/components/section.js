import React from 'react';
import { Box } from 'theme-ui';

export default function Section({ description, grow, title, children }) {
	return (
		<Box
			mb={5}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				flex: grow ? '1 1 auto' : '0 0 auto',
			}}>
			<h2>{title}</h2>
			{children}
		</Box>
	);
}
