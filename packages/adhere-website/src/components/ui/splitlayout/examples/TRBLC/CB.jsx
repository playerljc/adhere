import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

export default () => (
  <div style={{ height: 500, padding: 20, background: '#ccc' }}>
    <SplitLayout.TRBLC.CBSplitLayout
      style={{ height: '100%' }}
      gutter={20}
      bProps={{
        span: 12,
        fit: true,
        children: <Card>bottom</Card>,
      }}
      cProps={{
        children: <Card>center</Card>,
      }}
    />
  </div>
);
