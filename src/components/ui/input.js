import React from 'react';
import { Input as ThemeUiInput } from 'theme-ui';

import Label from './label';

export default function Input({
	id,
	label,
	placeholder,
	type,
	value,
	onChange,
}) {
	return (
		<Label htmlFor={id}>
			{label}
			<ThemeUiInput
				id={id}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
		</Label>
	);
}
