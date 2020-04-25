import React, { useMemo, useRef, useState } from 'react';
import { saveSvgAsPng } from 'save-svg-as-png';
import { Box, Button, Checkbox } from 'theme-ui';

import Editor from './editor';
import FormLabel from './ui/form-label';
import Layout from './ui/layout';
import Preview from './preview';
import Section from './ui/section';
import Settings from './settings';
import ReactWordcloud from 'react-wordcloud';
import {
	content as initialContent,
	settings as initialSettings,
} from '../data';
import { tokenizeWords } from '../nlp';

const options = {
	deterministic: true,
	rotations: 5,
	rotationAngles: [-90, 90],
	spiral: 'archimedean',
	scale: 'linear',
	fontFamily: 'impact',
	fontSizes: [8, 64],
};

function App() {
	const wordcloudRef = useRef();
	const [content, setContent] = useState(initialContent);
	const [settings, setSettings] = useState(initialSettings);
	const [selectedWord, setSelectedWord] = useState();
	const [showPreview, setShowPreview] = useState(false);

	const callbacks = useMemo(
		() => ({
			onWordClick: (word) => {
				setSelectedWord(word.text);
				setShowPreview(true);
			},
		}),
		[],
	);

	const words = useMemo(() => tokenizeWords(content, settings), [
		content,
		settings,
	]);

	function handleSave() {
		const svgElement = wordcloudRef.current.querySelector('svg');
		saveSvgAsPng(svgElement, 'wordcloud.png');
	}

	return (
		<Layout>
			<Section
				description="Configure the wordcloud with the settings button. Click on any word to see where they occur in the document.  Save your wordcloud as an image."
				title="Wordcloud">
				<Box ref={wordcloudRef} sx={{ minHeight: 400 }}>
					<ReactWordcloud
						options={options}
						words={words}
						callbacks={callbacks}
					/>
				</Box>
				<Box mt={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Settings settings={settings} onApply={setSettings} />
					<Button ml={3} onClick={handleSave}>
						Save
					</Button>
				</Box>
			</Section>
			<Section
				grow
				description="Edit and update content for the wordcloud.  You can also upload any text file."
				extra={
					<FormLabel direction="row" htmlFor="content" label="preview">
						<Checkbox
							id="content"
							checked={showPreview}
							onChange={() => {
								setShowPreview(!showPreview);
								window.location.hash = '';
							}}
						/>
					</FormLabel>
				}
				title="Content">
				{showPreview ? (
					<Preview content={content} selectedWord={selectedWord} />
				) : (
					<Editor content={content} onUpdate={setContent} />
				)}
			</Section>
		</Layout>
	);
}

export default App;
