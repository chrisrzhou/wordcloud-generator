import React from 'react';
import { Box, Text } from 'theme-ui';

export default function Section({ description, title, children }) {
	return (
		<Box as="section" mb={5}>
			<h2>{title}</h2>
			{description && (
				<Text mb={3} variant="description">
					{description}
				</Text>
			)}
			{children}
		</Box>
	);
}
