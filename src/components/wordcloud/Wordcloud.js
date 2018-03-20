import React from 'react';
import {connect} from 'react-redux';
import ResizeAware from 'react-resize-aware';
import ReactWordCloud from 'react-wordcloud';
import {createStructuredSelector} from 'reselect';

import properties from 'store/modules/properties';
import words from 'store/modules/words';

const {WORD_COUNT_KEY, WORD_KEY} = words.constants;

const WordCloud = ({properties, words, onSelectWord}) => {
  const {
    fontFamily,
    maxWords,
    orientations,
    orientationAngles,
    scale,
    spiral,
    tooltipEnabled,
    transitionDuration,
  } = properties;
  return (
    <ResizeAware>
      {size => {
        const width = size.width || 400; // default width
        const height = Math.min(width / 4 * 3, 500); // 4:3 ratio
        return (
          <ReactWordCloud
            fontFamily={fontFamily}
            height={height}
            maxWords={maxWords}
            maxAngle={orientationAngles[1]}
            minAngle={orientationAngles[0]}
            orientations={orientations}
            scale={scale}
            spiral={spiral}
            tooltipEnabled={tooltipEnabled}
            transitionDuration={transitionDuration}
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
};

export default connect(
  createStructuredSelector({
    properties: properties.selectors.getProperties,
    words: words.selectors.getWords,
  }),
  {
    onSelectWord: words.actions.creators.selectWord,
  },
)(WordCloud);
