import React from 'react';
import Highlighter from 'react-highlight-words';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import words from 'store/modules/words';
import {
  BACKGROUND_WASH,
  BORDER,
  MAIN_BACKGROUND,
  PRIMARY_COLOR,
} from 'styles/colors';
import {GUTTER, SIDER_TEXT_CONTAINER_HEIGHT} from 'styles/dimensions';

const {selectors} = words;

const TextPanel = ({
  isEditMode,
  selectedWords,
  text,
  onEditText,
  onResetText,
  onToggleEditMode,
}) => (
  <div className="ant-input" style={styles.textPreview}>
    <Highlighter
      autoEscape={true}
      highlightClassName="ant-tag ant-tag-blue"
      searchWords={selectedWords}
      textToHighlight={text}
    />
  </div>
);

const styles = {
  textPreview: {
    background: BACKGROUND_WASH,
    height: SIDER_TEXT_CONTAINER_HEIGHT,
    marginBottom: GUTTER,
    overflow: 'auto',
    whiteSpace: 'pre-wrap',
  },
};

export default connect(
  createStructuredSelector({
    selectedWords: selectors.getSelectedWords,
    text: selectors.getText,
  }),
)(TextPanel);
