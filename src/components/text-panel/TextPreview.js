import React from 'react';
import Highlighter from 'react-highlight-words';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import words from 'store/modules/words';
import {TEXT_PREVIEW_BACKGROUND} from 'styles/colors';
import {GUTTER, SIDER_TEXT_CONTAINER_HEIGHT} from 'styles/dimensions';

const {selectors} = words;

const style = {
  background: TEXT_PREVIEW_BACKGROUND,
  height: SIDER_TEXT_CONTAINER_HEIGHT,
  marginBottom: GUTTER,
  overflowY: 'auto',
  whiteSpace: 'pre-wrap',
};

const TextPanel = ({selectedWords, text}) => (
  <div className="ant-input" style={style}>
    <Highlighter
      autoEscape={true}
      highlightClassName="ant-tag ant-tag-blue"
      searchWords={selectedWords}
      textToHighlight={text}
    />
  </div>
);

export default connect(
  createStructuredSelector({
    selectedWords: selectors.getSelectedWords,
    text: selectors.getText,
  }),
)(TextPanel);
