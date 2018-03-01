import Input from 'antd/lib/input';
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import words from 'store/modules/words';
import {GUTTER, SIDER_TEXT_CONTAINER_HEIGHT} from 'styles/dimensions';

const {actions, selectors} = words;

const TextArea = ({text, onEditText}) => (
  <Input.TextArea
    value={text}
    style={style}
    onChange={e => onEditText(e.target.value)}
  />
);

const style = {
  height: SIDER_TEXT_CONTAINER_HEIGHT,
  marginBottom: GUTTER,
};

export default connect(
  createStructuredSelector({
    text: selectors.getText,
  }),
  {
    onEditText: actions.editText,
  },
)(TextArea);
