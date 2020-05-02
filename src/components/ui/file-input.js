import React from 'react';
import { Input as ThemeUiInput } from 'theme-ui';

import Label from './label';

export default function FileInput({ id, label, onChange }) {
	return (
		<Label htmlFor={id}>
			{label}
			<ThemeUiInput id={id} type="file" onChange={onChange} />
		</Label>
	);
}
