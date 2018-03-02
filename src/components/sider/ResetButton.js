import Button from 'antd/lib/button';
import React from 'react';
import {connect} from 'react-redux';

import app from 'store/modules/app';

const ResetButton = ({onReset}) => <Button onClick={onReset}>Reset</Button>;

export default connect(null, {
  onReset: app.actions.reset,
})(ResetButton);
