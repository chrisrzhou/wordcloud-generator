import {Col, Row} from 'antd/lib/grid';
import Layout from 'antd/lib/layout';
import Tabs from 'antd/lib/tabs';
import React from 'react';

import ApplyButton from './ApplyButton';
import ResetButton from './ResetButton';
import SiderHeader from './SiderHeader';
import Properties from 'components/properties/Properties';
import TextPanel from 'components/text-panel/TextPanel';
import {MAIN_BACKGROUND} from 'styles/colors';
import {SIDER_CONTAINER} from 'styles/margins';

const {TabPane} = Tabs;

const tabs = [
  {name: 'Text', component: TextPanel},
  {name: 'Properties', component: Properties},
];

const Sider = () => (
  <Layout.Sider breakpoint="lg" collapsedWidth={0} width={340}>
    <div style={styles.container}>
      <SiderHeader />
      <Tabs style={styles.tabs}>
        {tabs.map(({name, component}) => {
          const Component = component;
          return (
            <TabPane key={name} style={styles.tabPane} tab={name}>
              <Component />
            </TabPane>
          );
        })}
      </Tabs>
      <Row style={styles.buttons} type="flex" justify="end">
        <Col style={styles.button}>
          <ResetButton />
        </Col>
        <Col style={styles.button}>
          <ApplyButton />
        </Col>
      </Row>
    </div>
  </Layout.Sider>
);

const styles = {
  container: {
    background: MAIN_BACKGROUND,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  tabPane: {
    padding: SIDER_CONTAINER,
  },
  tabs: {
    height: '100%',
    overflow: 'auto',
  },
  buttons: {
    padding: SIDER_CONTAINER,
  },
  button: {
    marginLeft: SIDER_CONTAINER,
  },
};

export default Sider;
