import Button from 'antd/lib/button';
import React from 'react';

const DownloadButton = () => (
  <Button size="small" onClick={() => alert('download png')}>
    Download
  </Button>
);

export default DownloadButton;
