import React from 'react';
import { Box, Text } from 'theme-ui';

export default function Section({ description, extra, grow, title, children }) {
	return (
		<Box
			mb={5}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				flex: grow ? '1 0 auto' : '0 0 auto',
			}}>
			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<h2>{title}</h2>
				{extra}
			</Box>
			{description && (
				<Text mb={3} variant="description">
					{description}
				</Text>
			)}
			{children}
		</Box>
	);
}
