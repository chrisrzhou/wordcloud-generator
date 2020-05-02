import React from 'react';
import { Slider as ThemeUiSlider } from 'theme-ui';

import Label from './label';

export default function Slider({
	id,
	label,
	max,
	min = 0,
	step = 1,
	value,
	onChange,
}) {
	return (
		<Label htmlFor={id}>
			{label}
			<ThemeUiSlider
				id={id}
				max={max}
				min={min}
				step={step}
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
		</Label>
	);
}
