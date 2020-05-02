import React, { useMemo, useRef, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { saveSvgAsPng } from 'save-svg-as-png';

import Content from './content';
import Settings from './settings';
import { Box, Button, FlexLayout, Layout, Section } from './ui';
import { content as initialContent } from '../data';
import { tokenizeWords } from '../nlp';

export const initialSettings = {
	content: {
		allowNumbers: false,
		stemmer: null,
		stopwordsInput: '',
	},
	wordcloud: {
		deterministic: true,
		fontFamily: 'times new roman',
		fontSizes: [8, 64],
		rotations: 5,
		rotationAngles: [-90, 90],
		spiral: 'archimedean',
		scale: 'linear',
	},
};

function App() {
	const wordcloudRef = useRef();
	const [content, setContent] = useState(initialContent);
	const [settings, setSettings] = useState(initialSettings);
	const [selectedWord, setSelectedWord] = useState();

	const { content: contentSettings, wordcloud: wordcloudSettings } = settings;

	const wordcloudCallbacks = {
		onWordClick: (word) => setSelectedWord(word.text),
	};

	const words = useMemo(() => tokenizeWords(content, contentSettings), [
		content,
		contentSettings,
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
						options={wordcloudSettings}
						words={words}
						callbacks={wordcloudCallbacks}
					/>
				</Box>
				<FlexLayout justifyContent="flex-end">
					<Settings settings={settings} onApply={setSettings} />
					<Button onClick={handleSave}>Save</Button>
				</FlexLayout>
			</Section>
			<Section
				description="Edit or upload content for the wordcloud.  You can preview the content and selected wordcloud word with the preview checkbox below."
				title="Content">
				<Content
					content={content}
					selectedWord={selectedWord}
					onUpdateContent={(updatedContent) => {
						setContent(updatedContent);
						setSelectedWord();
					}}
				/>
			</Section>
		</Layout>
	);
}

export default App;
