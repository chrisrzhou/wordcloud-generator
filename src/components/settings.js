import React, { useState } from 'react';
import { Box, Button } from 'theme-ui';

export default function Settings({ settings: initialSettings, onApply }) {
	const [shown, setShown] = useState(false);
	const [settings, setSettings] = useState(initialSettings);

	function handleShowSettings() {
		setShown(true);
	}

	function handleCancel() {
		setShown(false);
		setSettings(initialSettings);
	}

	const modal = shown && (
		<div>
			<h2>Wordcloud</h2>
			Colors (special picker) Deterministic (checkbox) FontFamily (select)
			FontSize slider FontWeight (dropdown) Padding: slider RotationAngles:
			angle rotation slider Rotations: slider scale: dropdown spiral: dropdown
			transitionDuration: slider max words: number input
			<h2>Content</h2>
			Stopwords (comma-separated) All Numbers (checkbox) Stemmer (dropdown with
			none and links to definitions)
			<Box>
				<Button variant="secondary" onClick={handleCancel}>
					Cancel
				</Button>
				<Button variant="secondary" onClick={onApply}>
					Apply
				</Button>
			</Box>
		</div>
	);

	return (
		<>
			<Button variant="secondary" onClick={handleShowSettings}>
				Options
			</Button>
			{modal}
		</>
	);
}
