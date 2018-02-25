import Layout from 'antd/lib/layout';
import Tabs from 'antd/lib/tabs';
import React from 'react';

import SiderHeader from './SiderHeader';
import Properties from 'components/properties/Properties';
import TextPanel from 'components/text-panel/TextPanel';
import {MAIN_BACKGROUND} from 'styles/colors';

const {TabPane} = Tabs;

const Sider = () => (
  <Layout.Sider style={style} breakpoint="lg" collapsedWidth={0} width={340}>
    <SiderHeader />
    <Tabs>
      <TabPane tab="Text" key="1">
        <TextPanel />
      </TabPane>
      <TabPane tab="Properties" key="2">
        <Properties />
      </TabPane>
    </Tabs>
  </Layout.Sider>
);

const style = {
  background: MAIN_BACKGROUND,
};

export default Sider;
