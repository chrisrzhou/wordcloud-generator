import React, { useRef, useState } from 'react';
import { saveSvgAsPng } from 'save-svg-as-png';
import { Box, Button } from 'theme-ui';

import Editor from './editor';
import Layout from './layout';
import Section from './section';
import Settings from './settings';
import ReactWordcloud from 'react-wordcloud';
import {
	content as initialContent,
	settings as initialSettings,
} from '../data';

const App = () => {
	const wordcloudRef = useRef();
	const [content, setContent] = useState(initialContent);
	const [settings, setSettings] = useState(initialSettings);

	function handleSave() {
		const svgElement = wordcloudRef.current.querySelector('svg');
		saveSvgAsPng(svgElement, 'wordcloud.png');
	}

	const options = {};
	const words = [
		{
			text: 'mistake',
			value: 11,
		},
		{
			text: 'thought',
			value: 16,
		},
		{
			text: 'bad',
			value: 17,
		},
		{
			text: 'correct',
			value: 10,
		},
		{
			text: 'day',
			value: 54,
		},
		{
			text: 'prescription',
			value: 12,
		},
		{
			text: 'time',
			value: 77,
		},
		{
			text: 'thing',
			value: 45,
		},
	];

	return (
		<Layout>
			<Section title="Wordcloud">
				<Box ref={wordcloudRef}>
					<ReactWordcloud options={options} words={words} />
				</Box>
				<Box mt={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Settings settings={settings} onApply={setSettings} />
					<Button ml={3} onClick={handleSave}>
						Save
					</Button>
				</Box>
			</Section>
			<Section grow title="Content (preview toggle)">
				<Editor content={content} onUpdate={setContent} />
			</Section>
		</Layout>
	);
};

export default App;
