import Menu from 'antd/lib/menu';
import React from 'react';

const Properties = () => (
  <Menu mode="inline" defaultSelectedKeys={['2']}>
    <Menu.Item key="1">
      <span className="nav-text">nav 1</span>
    </Menu.Item>
    <Menu.Item key="2">
      <span className="nav-text">nav 2</span>
    </Menu.Item>
  </Menu>
);

export default Properties;
