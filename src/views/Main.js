import Button from 'antd/lib/button';
import {Col, Row} from 'antd/lib/grid';
import React from 'react';
import {Link} from 'react-router-dom';

import ApplyButton from 'components/wordcloud/ApplyButton';
import DownloadButton from 'components/wordcloud/DownloadButton';
import ExcludedWords from 'components/wordcloud/ExcludedWords';
import ResetButton from 'components/wordcloud/ResetButton';
import SelectedWords from 'components/wordcloud/SelectedWords';
import Wordcloud from 'components/wordcloud/Wordcloud';
import {INFO} from 'routes/paths';
import {GUTTER} from 'styles/dimensions';

const Main = () => (
  <div style={styles.container}>
    <Row style={styles.buttonContainer}>
      <Col span={16}>
        <Row type="flex">
          <div style={styles.button}>
            <ResetButton />
          </div>
          <div style={styles.button}>
            <ApplyButton />
          </div>
        </Row>
      </Col>
      <Col span={8}>
        <Row type="flex" justify="end">
          <div style={styles.button}>
            <DownloadButton />
          </div>
          <Link to={INFO}>
            <div style={styles.button}>
              <Button icon="info" shape="circle" size="small" />
            </div>
          </Link>
        </Row>
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
  buttonContainer: {
    marginBottom: GUTTER,
  },
  button: {
    margin: '0 4px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    margin: `0 ${GUTTER}px`,
    minHeight: 100,
  },
};

export default Main;
