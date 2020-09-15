import React, { useMemo, useRef, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { saveSvgAsPng } from 'save-svg-as-png';
import { v4 as uuidv4 } from 'uuid';

import Content from './content';
import Settings from './settings';
import { Box, Button, Flex, Layout, Section } from './ui';
import { content as initialContent } from '../data';
import { tokenizeWords } from '../nlp';

export const initialSettings = {
  content: {
    allowNumbers: false,
    maxWords: 100,
    stemmer: null,
    stopwordsInput: '',
  },
  wordcloud: {
    colors: [
      '#1f77b4',
      '#ff7f0e',
      '#2ca02c',
      '#d62728',
      '#9467bd',
      '#8c564b',
      '#e377c2',
      '#7f7f7f',
      '#bcbd22',
      '#17becf',
    ],
    fontFamily: 'times new roman',
    fontSizes: [8, 64],
    padding: 1,
    rotations: undefined,
    rotationAngles: [-90, 90],
    spiral: 'archimedean',
    scale: 'linear',
    transitionDuration: 500,
    // Non-configurable
    deterministic: true,
    enableOptimizations: true,
    enableTooltip: true,
  },
};

function App() {
  const wordcloudRef = useRef();
  const [content, setContent] = useState(initialContent);
  const [settings, setSettings] = useState(initialSettings);
  const [selectedWord, setSelectedWord] = useState(null);
  const [randomSeed, setRandomSeed] = useState(uuidv4());

  const { content: contentSettings, wordcloud: wordcloudSettings } = settings;

  const wordcloudCallbacks = useMemo(
    () => ({
      onWordClick: (word) => setSelectedWord(word.text),
    }),
    [],
  );

  const words = useMemo(() => tokenizeWords(content, contentSettings), [
    content,
    contentSettings,
  ]);

  const wordcloudOptions = useMemo(
    () => ({
      ...wordcloudSettings,
      randomSeed,
    }),
    [wordcloudSettings, randomSeed],
  );

  function handleSave() {
    const svgElement = wordcloudRef.current.querySelector('svg');
    saveSvgAsPng(svgElement, 'wordcloud.png');
  }

  function handleAnimate() {
    setRandomSeed(uuidv4());
    setSelectedWord();
  }

  return (
    <Layout>
      <Section
        description="Configure the wordcloud with the settings button. Click on any word to see where they occur in the document.  Save your wordcloud as an image."
        title="Wordcloud">
        <Box ref={wordcloudRef} sx={{ minHeight: 400 }}>
          <ReactWordcloud
            options={wordcloudOptions}
            words={words}
            callbacks={wordcloudCallbacks}
          />
        </Box>
        <Flex justifyContent="flex-end">
          <Button variant="secondary" onClick={handleAnimate}>
            Animate
          </Button>
          <Settings settings={settings} onApply={setSettings} />
          <Button onClick={handleSave}>Save</Button>
        </Flex>
      </Section>
      <Section
        description="Uncheck 'Preview' to edit or upload any document for the wordcloud.  Selected wordcloud words will be highlighted when previewing the content."
        title="Content">
        <Content
          content={content}
          selectedWord={selectedWord}
          onUpdate={(updatedContent) => {
            setContent(updatedContent);
            setSelectedWord(null);
          }}
        />
      </Section>
    </Layout>
  );
}

export default App;
