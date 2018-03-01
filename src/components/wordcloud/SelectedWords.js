import {Item as FormItem} from 'antd/lib/form';
import Tag from 'antd/lib/tag';
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import words from 'store/modules/words';

const {actions, selectors} = words;

const SelectedWords = ({selectedWords, onSelectWord}) => (
  <FormItem label="Selected Words">
    {selectedWords.map(word => (
      <Tag key={word} closable onClose={() => onSelectWord(word)}>
        {word}
      </Tag>
    ))}
  </FormItem>
);

export default connect(
  createStructuredSelector({
    selectedWords: selectors.getSelectedWords,
  }),
  {
    onSelectWord: actions.selectWord,
  },
)(SelectedWords);
