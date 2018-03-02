import {Item as FormItem} from 'antd/lib/form';
import Select, {Option} from 'antd/lib/select';
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import words from 'store/modules/words';

const {actions, constants, selectors} = words;
const {WORD_KEY} = constants;

const style = {
  width: '100%',
};

const ExcludedWords = ({excludedWords, words, onExcludeWord}) => (
  <FormItem label="Excluded Words">
    <Select
      style={style}
      mode="multiple"
      placeholder="Please select"
      value={excludedWords}
      onDeselect={word => onExcludeWord(word)}
      onSelect={word => onExcludeWord(word)}>
      {words.map(word => {
        const wordValue = word[WORD_KEY];
        return <Option key={wordValue}>{wordValue}</Option>;
      })}
    </Select>
  </FormItem>
);

export default connect(
  createStructuredSelector({
    excludedWords: selectors.getExcludedWords,
    words: selectors.getWords,
  }),
  {
    onExcludeWord: actions.excludeWord,
  },
)(ExcludedWords);
