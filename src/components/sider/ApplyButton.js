import Button from 'antd/lib/button';
import React from 'react';
import {connect} from 'react-redux';

import words from 'store/modules/words';

const ApplyButton = ({onApplyWords}) => (
  <Button type="primary" onClick={onApplyWords}>
    Apply
  </Button>
);

export default connect(null, {onApplyWords: words.actions.applyWords})(
  ApplyButton,
);
