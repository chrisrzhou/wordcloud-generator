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
import { tokenizeWords } from '../nlp';

const App = () => {
	const wordcloudRef = useRef();
	const [content, setContent] = useState(initialContent);
	const [settings, setSettings] = useState(initialSettings);

	function handleSave() {
		const svgElement = wordcloudRef.current.querySelector('svg');
		saveSvgAsPng(svgElement, 'wordcloud.png');
	}

	const options = {
		rotations: 5,
		rotationAngles: [-90, 90],
		spiral: 'archimedean',
		scale: 'log',
		fontFamily: 'impact',
		fontSizes: [8, 48],
	};
	const words = tokenizeWords(content, settings);

	return (
		<Layout>
			<Section title="Wordcloud">
				<Box ref={wordcloudRef} sx={{ minHeight: 400 }}>
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
