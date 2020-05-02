import React from 'react';

import FlexLayout from './flex-layout';
import Text from './text';

export default function Section({ description, title, children }) {
	return (
		<FlexLayout as="section" flexDirection="column" mb={5}>
			<h2>{title}</h2>
			{description && <Text variant="description">{description}</Text>}
			{children}
		</FlexLayout>
	);
}
