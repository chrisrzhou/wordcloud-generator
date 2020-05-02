import React, { useRef } from 'react';
import { SketchPicker } from 'react-color';

import Card from '../card';
import Button from '../button';
import FlexLayout from '../flex-layout';

import { useClickOutside } from '../../../hooks';

export default function Picker({ color, onHide, onRemove, onUpdate }) {
	const pickerRef = useRef();

	useClickOutside(pickerRef, onHide);

	return (
		<Card ref={pickerRef}>
			<FlexLayout flexDirection="column">
				<SketchPicker
					color={color}
					onChangeComplete={(updatedColor) => {
						onUpdate(updatedColor.hex);
						onHide();
					}}
				/>
				<Button
					variant="secondary"
					onClick={() => {
						onRemove();
						onHide();
					}}>
					Remove color
				</Button>
			</FlexLayout>
		</Card>
	);
}
