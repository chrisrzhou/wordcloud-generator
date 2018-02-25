import React from 'react';
import ReactWordCloud from 'react-wordcloud';

const WORD_COUNT_KEY = 'tf';
const WORD_KEY = 'term';

const mockWords = [
  {term: 'aaaa', tf: 10},
  {term: 'bbbbb', tf: 5},
  {term: 'cccc', tf: 3},
];

const WordCloud = () => (
  <ReactWordCloud
    height={450}
    width={500}
    words={mockWords}
    wordCountKey={WORD_COUNT_KEY}
    wordKey={WORD_KEY}
    onWordClick={word => console.log(word)}
  />
);

export default WordCloud;
