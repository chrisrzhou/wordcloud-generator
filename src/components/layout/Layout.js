import Layout, {Content} from 'antd/lib/layout';
import React from 'react';

import Footer from './Footer';
import Sider from 'components/sider/Sider';
import {MAIN_BACKGROUND} from 'styles/colors';
import {GUTTER} from 'styles/dimensions';

const styles = {
  app: {
    height: '100vh',
  },
  main: {
    padding: `0 ${GUTTER}px`,
  },
  content: {
    background: MAIN_BACKGROUND,
    borderRadus: 4,
    overflowY: 'auto',
    margin: GUTTER,
    padding: GUTTER,
  },
};

export default ({children}) => (
  <Layout style={styles.app}>
    <Sider />
    <Layout style={styles.main}>
      <Content style={styles.content}>{children}</Content>
      <Footer />
    </Layout>
  </Layout>
);
