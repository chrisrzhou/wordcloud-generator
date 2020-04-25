import React, { useState } from 'react';
import { Button } from 'theme-ui';

import Modal from './ui/modal';

export default function Settings({ settings: initialSettings, onApply }) {
	const [showSettings, setShowSettings] = useState(false);
	const [settings, setSettings] = useState(initialSettings);

	function handleShowSettings() {
		setShowSettings(true);
	}

	function handleCancel() {
		setShowSettings(false);
		setSettings(initialSettings);
	}

	return (
		<>
			<Button variant="secondary" onClick={handleShowSettings}>
				Settings
			</Button>
			<Modal
				shown={showSettings}
				submitText="Apply"
				title="Settings"
				onHide={handleCancel}
				onSubmit={onApply}>
				<h2>Wordcloud</h2>
				Colors (special picker) Deterministic (checkbox) FontFamily (select)
				FontSize slider FontWeight (dropdown) Padding: slider RotationAngles:
				angle rotation slider Rotations: slider scale: dropdown spiral: dropdown
				transitionDuration: slider max words: number input
				<h2>Content</h2>
				Stopwords (comma-separated) All Numbers (checkbox) Stemmer (dropdown
				with none and links to definitions)
				<h2>Wordcloud</h2>
				Colors (special picker) Deterministic (checkbox) FontFamily (select)
				FontSize slider FontWeight (dropdown) Padding: slider RotationAngles:
				angle rotation slider Rotations: slider scale: dropdown spiral: dropdown
				transitionDuration: slider max words: number input
				<h2>Content</h2>
				Stopwords (comma-separated) All Numbers (checkbox) Stemmer (dropdown
				with none and links to definitions) <h2>Wordcloud</h2>
				Colors (special picker) Deterministic (checkbox) FontFamily (select)
				FontSize slider FontWeight (dropdown) Padding: slider RotationAngles:
				angle rotation slider Rotations: slider scale: dropdown spiral: dropdown
				transitionDuration: slider max words: number input
				<h2>Content</h2>
				Stopwords (comma-separated) All Numbers (checkbox) Stemmer (dropdown
				with none and links to definitions)
			</Modal>
		</>
	);
}
