import {Row} from 'antd/lib/grid';
import React from 'react';
import {Link} from 'react-router-dom';

import {HOME} from 'routes/paths';
import {SIDER_TAB_PANEL_CONTAINER_PADDING} from 'styles/dimensions';

const SiderHeader = () => (
  <Row>
    <h1 style={style}>
      <Link to={HOME}>Wordcloud Generator</Link>
    </h1>
  </Row>
);

const style = {
  margin: SIDER_TAB_PANEL_CONTAINER_PADDING,
};

export default SiderHeader;
