import { Card } from 'antd';
import React from 'react';

import SplitLayout from '../src/index';

import 'antd/dist/reset.css';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div style={{ height: 500, padding: 20, background: '#f0f0f0' }}>
      <SplitLayout.TRBLC.LCSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        lProps={{
          fit: true,
          span: 3,
          children: <Card style={{ height: '100%' }}>Left</Card>,
        }}
        cProps={{
          children: <Card style={{ height: '100%' }}>Center</Card>,
        }}
      />
    </div>
  );
};
