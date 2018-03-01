import Button from 'antd/lib/button';
import {Col, Row} from 'antd/lib/grid';
import React from 'react';
import {Link} from 'react-router-dom';

import DownloadButton from 'components/wordcloud/DownloadButton';
import ExcludedWords from 'components/wordcloud/ExcludedWords';
import SelectedWords from 'components/wordcloud/SelectedWords';
import Wordcloud from 'components/wordcloud/Wordcloud';
import {INFO} from 'routes/paths';
import {GUTTER} from 'styles/dimensions';

const Main = () => (
  <div style={styles.container}>
    <Row align="middle" gutter={12} justify="end" type="flex">
      <Col>
        <DownloadButton />
      </Col>
      <Col>
        <Link to={INFO}>
          <Button size="small">Info</Button>
        </Link>
      </Col>
    </Row>
    <Wordcloud />
    <Row style={styles.row}>
      <ExcludedWords />
    </Row>
    <Row style={styles.row}>
      <SelectedWords />
    </Row>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    marginBottom: GUTTER,
    minHeight: 100,
  },
};

export default Main;
