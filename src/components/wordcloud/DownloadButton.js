import Button from 'antd/lib/button';
import * as d3Selection from 'd3-selection';
import React from 'react';
import {saveSvgAsPng} from 'save-svg-as-png';

const DownloadButton = () => (
  <Button
    size="small"
    onClick={() => {
      saveSvgAsPng(d3Selection.select('svg').node(), 'wordcloud.png');
    }}>
    Download
  </Button>
);

export default DownloadButton;
