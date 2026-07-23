import { Card } from 'antd';
import React from 'react';

import SplitLayout from '../src/index';

import 'antd/dist/reset.css';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div style={{ height: 600, padding: 20, background: '#f0f0f0' }}>
      <SplitLayout.TRBLC.TBLCRSplitLayout
        style={{ height: '100%' }}
        gutter={12}
        tProps={{
          span: 3,
          children: <Card style={{ height: '100%' }}>Top</Card>,
        }}
        bProps={{
          span: 3,
          children: <Card style={{ height: '100%' }}>Bottom</Card>,
        }}
        lProps={{
          span: 4,
          children: <Card style={{ height: '100%' }}>Left</Card>,
        }}
        cProps={{
          children: <Card style={{ height: '100%' }}>Center</Card>,
        }}
        rProps={{
          span: 4,
          children: <Card style={{ height: '100%' }}>Right</Card>,
        }}
      />
    </div>
  );
};
