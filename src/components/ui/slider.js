import React from 'react';
import { Slider as ThemeUiSlider } from 'theme-ui';

import Label from './label';

export default function Slider({
	id,
	label,
	max,
	min = 0,
	step = 1,
	unit = '',
	value,
	width,
	onChange,
}) {
	return (
		<Label htmlFor={id}>
			{label}: {value}
			{unit}
			<ThemeUiSlider
				id={id}
				max={max}
				min={min}
				step={step}
				sx={{ width }}
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
		</Label>
	);
}
