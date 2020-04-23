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
			<h2>Content</h2>
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
