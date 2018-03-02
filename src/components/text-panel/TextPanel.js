import Button from 'antd/lib/button';
import {Row} from 'antd/lib/grid';
import Switch from 'antd/lib/switch';
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import TextArea from './TextArea';
import TextPreview from './TextPreview';
import TextUploader from './TextUploader';
import words from 'store/modules/words';
import {GUTTER} from 'styles/dimensions';

const {actions, selectors} = words;

const styles = {
  controlPanel: {
    height: 32,
    marginTop: GUTTER,
  },
};

const TextPanel = ({isEditMode, onResetText, onToggleEditMode}) => (
  <div>
    <TextUploader />
    <Row style={styles.controlPanel} type="flex" justify="space-between">
      <Switch
        checkedChildren="edit"
        unCheckedChildren="edit"
        checked={isEditMode}
        onChange={onToggleEditMode}
      />
      {isEditMode && (
        <Button size="small" onClick={onResetText}>
          Reset text
        </Button>
      )}
    </Row>
    {isEditMode && <TextArea />}
    {!isEditMode && <TextPreview />}
  </div>
);

export default connect(
  createStructuredSelector({
    isEditMode: selectors.getIsEditMode,
  }),
  {
    onResetText: actions.resetText,
    onToggleEditMode: actions.toggleEdit,
  },
)(TextPanel);
