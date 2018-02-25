import {Row} from 'antd/lib/grid';
import React from 'react';
import {Link} from 'react-router-dom';

import {HOME} from 'routes/paths';

const SiderHeader = () => (
  <Row>
    <h1 style={style}>
      <Link to={HOME}>Wordcloud Generator</Link>
    </h1>
  </Row>
);

const style = {
  margin: '0 12px',
};

export default SiderHeader;
