import React from 'react';
import {connect} from 'react-redux';
import ResizeAware from 'react-resize-aware';
import ReactWordCloud from 'react-wordcloud';
import {createStructuredSelector} from 'reselect';

import words from 'store/modules/words';

const {actions, constants, selectors} = words;
const {WORD_COUNT_KEY, WORD_KEY} = constants;

const WordCloud = ({words, onSelectWord}) => (
  <ResizeAware>
    {({width}) => {
      const height = Math.min(width / 4 * 3, 600); // 4:3 ratio
      return (
        <ReactWordCloud
          height={height}
          maxWords={100}
          width={width || 400}
          words={words}
          wordCountKey={WORD_COUNT_KEY}
          wordKey={WORD_KEY}
          onWordClick={word => onSelectWord(word[WORD_KEY])}
        />
      );
    }}
  </ResizeAware>
);

export default connect(
  createStructuredSelector({
    words: selectors.getWords,
  }),
  {
    onSelectWord: actions.selectWord,
  },
)(WordCloud);
