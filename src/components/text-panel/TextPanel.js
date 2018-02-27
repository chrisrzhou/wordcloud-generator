import Button from 'antd/lib/button';
import {Row} from 'antd/lib/grid';
import {TextArea} from 'antd/lib/input';
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import TextUploader from './TextUploader';
import text from 'store/modules/text';
import {GUTTER} from 'styles/margins';

const {actions, selectors} = text;

const TextPanel = ({text, onEditText, onResetText}) => (
  <div>
    <TextUploader />
    <TextArea
      value={text}
      rows={20}
      style={styles.textArea}
      onChange={e => onEditText(e.target.value)}
    />
    <Row type="flex" justify="end">
      <Button size="small" onClick={onResetText}>
        Reset text
      </Button>
    </Row>
  </div>
);

const styles = {
  textArea: {
    marginTop: GUTTER,
    marginBottom: 8,
  },
};

export default connect(
  createStructuredSelector({
    text: selectors.getState,
  }),
  {
    onEditText: actions.edit,
    onResetText: actions.reset,
  },
)(TextPanel);
