import {Row} from 'antd/lib/grid';
import {TextArea} from 'antd/lib/input';
import React from 'react';

import TextUploader from './TextUploader';
import {GUTTER} from 'styles/margins';

const TextPanel = () => (
  <div>
    <TextUploader />
    <TextArea
      rows={20}
      style={styles.textArea}
      onChange={e => console.log(e.target.value)}
    />
    <Row type="flex" justify="end">
      <a href="#" onClick={() => alert('reset text')}>
        reset text
      </a>
    </Row>
  </div>
);

const styles = {
  textArea: {
    marginTop: GUTTER,
  },
};

export default TextPanel;
