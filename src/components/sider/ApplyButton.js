import Button from 'antd/lib/button';
import React from 'react';

const ApplyButton = () => (
  <Button type="primary" onClick={() => alert('applied')}>
    Apply
  </Button>
);

export default ApplyButton;
