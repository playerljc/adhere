import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

export default () => (
  <div style={{ height: 500, padding: 20, background: '#ccc' }}>
    <SplitLayout.TRBLC.CBRSplitLayout
      style={{ height: '100%' }}
      gutter={20}
      autoInnerProps={{ gutter: [0, 20] }}
      bProps={{
        fit: true,
        span: 3,
        children: <Card>Bottom</Card>,
      }}
      rProps={{
        fit: true,
        span: 3,
        children: <Card>Right</Card>,
      }}
      cProps={{
        children: <Card>Center</Card>,
      }}
    />
  </div>
);
