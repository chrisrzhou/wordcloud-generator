import Layout from 'antd/lib/layout';
import React from 'react';

import Footer from './Footer';
import Sider from 'components/sider/Sider';
import {MAIN_BACKGROUND} from 'styles/colors';
import {GUTTER} from 'styles/dimensions';

const App = ({children}) => (
  <Layout style={styles.app}>
    <Sider />
    <Layout style={styles.main}>
      <Layout.Content style={styles.content}>{children}</Layout.Content>
      <Footer />
    </Layout>
  </Layout>
);

const styles = {
  app: {
    height: '100vh',
  },
  main: {
    padding: `0 ${GUTTER}px`,
  },
  content: {
    background: MAIN_BACKGROUND,
    minHeight: 360,
    overflow: 'auto',
    padding: GUTTER,
  },
};

export default App;
