import React, { useState } from 'react';

import { Box, Button, Checkbox, Input, Select, Modal } from './ui';

const stemmerOptions = [
	{ value: null, label: 'None' },
	{ value: 'porter', label: 'Porter' },
	{ value: 'lancaster', label: 'Lancaster' },
];

const inputWidth = 300;

export default function Settings({ settings: initialSettings, onApply }) {
	const [showSettings, setShowSettings] = useState(false);
	const [settings, setSettings] = useState(initialSettings);

	function handleShowSettings() {
		setShowSettings(true);
	}

	function handleUpdateSettings(type, key, value) {
		const updatedSettings = {
			...settings,
			[type]: {
				...settings[type],
				[key]: value,
			},
		};
		setSettings(updatedSettings);
	}

	function handleApplySettings() {
		onApply(settings);
		setShowSettings(false);
	}

	function handleCancel() {
		setSettings(initialSettings);
		setShowSettings(false);
	}

	const { wordcloud: wordcloudSettings, content: contentSettings } = settings;

	const modal = (
		<Modal
			shown={showSettings}
			submitText="Apply"
			title="Settings"
			onHide={handleCancel}
			onSubmit={handleApplySettings}>
			<Box as="h3">Wordcloud</Box>
			<h4>Deterministic (checkbox)</h4>
			<h4>Colors (picker)</h4>
			<Input
				id="font-family"
				label="Font Family"
				type="text"
				value={wordcloudSettings.fontFamily}
				width={inputWidth}
				onChange={(value) => {
					handleUpdateSettings('wordcloud', 'fontFamily', value);
				}}
			/>
			<h4>Font Size (min+max slider)</h4>
			<h4>Word Padding (slider)</h4>
			<h4>Enable tooltip (checkbox)</h4>
			<h4>Rotation Angles (min+max slider)</h4>
			<h4>Rotations (number input + random checkbox)</h4>
			<h4>Scale (select)</h4>
			<h4>Spiral (select)</h4>
			<h4>Transition Duration (slider)</h4>
			<Box as="h3" mt={5}>
				Content
			</Box>
			<Checkbox
				id="all-numbers"
				label="Allow Numbers"
				value={contentSettings.allowNumbers}
				onChange={(value) => {
					handleUpdateSettings('content', 'allowNumbers', value);
				}}
			/>
			<Input
				id="stopwords"
				label="Stopwords"
				placeholder="provide comma-separated stopwords"
				type="text"
				value={contentSettings.stopwordsInput}
				width={inputWidth}
				onChange={(value) => {
					handleUpdateSettings('content', 'stopwordsInput', value);
				}}
			/>
			<Select
				id="stemmer"
				label="Stemmer"
				options={stemmerOptions}
				value={contentSettings.stemmer}
				width={inputWidth}
				onChange={(value) => {
					handleUpdateSettings('content', 'stemmer', value);
				}}
			/>
			<h4>Max words (number)</h4>
		</Modal>
	);

	return (
		<>
			<Button variant="secondary" onClick={handleShowSettings}>
				Settings
			</Button>
			{modal}
		</>
	);
}
