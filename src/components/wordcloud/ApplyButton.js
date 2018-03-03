import Button from 'antd/lib/button';
import React from 'react';
import {connect} from 'react-redux';

import app from 'store/modules/app';

const ApplyButton = ({onApply}) => (
  <Button size="small" type="primary" onClick={onApply}>
    Apply
  </Button>
);

export default connect(null, {onApply: app.actions.apply})(ApplyButton);
