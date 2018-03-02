import {Col, Row} from 'antd/lib/grid';
import {Sider} from 'antd/lib/layout';
import Tabs from 'antd/lib/tabs';
import React from 'react';

import ApplyButton from './ApplyButton';
import ResetButton from './ResetButton';
import SiderHeader from './SiderHeader';
import Properties from 'components/properties/Properties';
import TextPanel from 'components/text-panel/TextPanel';
import {MAIN_BACKGROUND} from 'styles/colors';
import {SIDER_TAB_PANEL_CONTAINER_PADDING} from 'styles/dimensions';

const {TabPane} = Tabs;

const tabs = [
  {name: 'Text', component: TextPanel},
  {name: 'Properties', component: Properties},
];

const styles = {
  container: {
    background: MAIN_BACKGROUND,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  tabPane: {
    padding: SIDER_TAB_PANEL_CONTAINER_PADDING,
  },
  tabs: {
    height: '100%',
    overflowY: 'auto',
  },
  buttons: {
    padding: SIDER_TAB_PANEL_CONTAINER_PADDING,
  },
};

export default () => (
  <Sider breakpoint="lg" collapsedWidth={0} width={340}>
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
      <Row
        style={styles.buttons}
        gutter={SIDER_TAB_PANEL_CONTAINER_PADDING}
        justify="end"
        type="flex">
        <Col>
          <ResetButton />
        </Col>
        <Col>
          <ApplyButton />
        </Col>
      </Row>
    </div>
  </Sider>
);
