import {Col, Row} from 'antd/lib/grid';
import React from 'react';
import {Link} from 'react-router-dom';

import SavePngButton from 'components/wordcloud/SavePngButton';
import SelectedWords from 'components/wordcloud/SelectedWords';
import Stopwords from 'components/wordcloud/Stopwords';
import Wordcloud from 'components/wordcloud/Wordcloud';
import {INFO} from 'routes/paths';
import {GUTTER} from 'styles/margins';

const Main = () => (
  <div style={styles.container}>
    <Row align="middle" gutter={GUTTER} justify="end" type="flex">
      <Col>
        <SavePngButton />
      </Col>
      <Col>
        <Link to={INFO}>[info]</Link>
      </Col>
    </Row>
    <Wordcloud />
    <Row style={styles.row}>
      <SelectedWords />
    </Row>
    <Row style={styles.row}>
      <Stopwords />
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
  },
};

export default Main;
