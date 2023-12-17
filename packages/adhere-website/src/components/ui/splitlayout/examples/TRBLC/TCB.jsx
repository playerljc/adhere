import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

export default () => (
  <div style={{ height: 500, padding: 20, background: '#ccc' }}>
    <SplitLayout.TRBLC.TCBSplitLayout
      style={{ height: '100%' }}
      gutter={20}
      tProps={{
        span: 3,
        fit: true,
        children: <Card>top</Card>,
      }}
      cProps={{
        children: <Card>center</Card>,
      }}
      bProps={{
        span: 3,
        fit: true,
        children: <Card>bottom</Card>,
      }}
    />
  </div>
);
