import React from 'react';
import { Label } from 'theme-ui';

export default function FormLabel({
	children,
	direction = 'column',
	htmlFor,
	label,
}) {
	const isRowDirection = direction === 'row';
	return (
		<Label
			htmlFor={htmlFor}
			mb={isRowDirection ? undefined : 2}
			sx={{
				alignItems: isRowDirection ? 'center' : 'flex-start',
				display: 'flex',
				flexDirection: direction,
				fontSize: 'xs',
				fontWeight: 'bold',
				textTransform: 'uppercase',
				width: 'min-content',
			}}>
			{label}
			{children}
		</Label>
	);
}
