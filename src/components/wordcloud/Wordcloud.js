import React from 'react';
import ReactWordCloud from 'react-wordcloud';
import ResizeAware from 'react-resize-aware';

const WORD_COUNT_KEY = 'tf';
const WORD_KEY = 'term';

const mockWords = [
  {term: 'aaaa', tf: 10},
  {term: 'bbbbb', tf: 5},
  {term: 'cccc', tf: 3},
];

const WordCloud = () => (
  <ResizeAware>
    {({width, height}) => {
      return (
        <ReactWordCloud
          height={width * 3 / 4} // 4:3 ratio
          width={width}
          words={mockWords}
          wordCountKey={WORD_COUNT_KEY}
          wordKey={WORD_KEY}
          onWordClick={word => console.log(word)}
        />
      );
    }}
  </ResizeAware>
);

export default WordCloud;
