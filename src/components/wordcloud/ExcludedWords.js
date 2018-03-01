import AutoComplete, {Option} from 'antd/lib/auto-complete';
import {Item as FormItem} from 'antd/lib/form';
import Icon from 'antd/lib/icon';
import Tag from 'antd/lib/tag';
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import words from 'store/modules/words';

const {actions, constants, selectors} = words;

class ExcludedWords extends React.PureComponent {
  state = {
    editNewTag: false,
  };

  _editNewTag = () => {
    this.setState({editNewTag: true});
  };

  _excludeWord = word => {
    this.setState({editNewTag: false});
    this.props.onExcludeWord(word);
  };

  render() {
    const {excludedWords, words, onExcludeWord} = this.props;
    const {editNewTag} = this.state;
    return (
      <FormItem label="Excluded Words">
        {excludedWords.map(word => (
          <Tag key={word} closable onClose={() => onExcludeWord(word)}>
            {word}
          </Tag>
        ))}
        {editNewTag && (
          <AutoComplete
            allowClear
            autoFocus
            style={styles.autoComplete}
            onSelect={this._excludeWord}
            placeholder="input here">
            {words.map(word => {
              const wordValue = word[constants.WORD_KEY];
              return <Option key={wordValue}>{wordValue}</Option>;
            })}
          </AutoComplete>
        )}
        {!editNewTag && (
          <Tag onClick={this._editNewTag} style={styles.newTag}>
            <Icon type="plus" /> New Tag
          </Tag>
        )}
      </FormItem>
    );
  }
}

const styles = {
  autoComplete: {
    width: 200,
  },
  newTag: {
    borderStyle: 'dashed',
  },
};

export default connect(
  createStructuredSelector({
    excludedWords: selectors.getExcludedWords,
    words: selectors.getWords,
  }),
  {
    onExcludeWord: actions.excludeWord,
  },
)(ExcludedWords);
