import Button from 'antd/lib/button';
import React from 'react';
import {connect} from 'react-redux';

import words from 'store/modules/words';

const ResetButton = ({onResetAll}) => (
  <Button onClick={onResetAll}>Reset</Button>
);

export default connect(null, {
  onResetAll: words.actions.resetAll,
})(ResetButton);
