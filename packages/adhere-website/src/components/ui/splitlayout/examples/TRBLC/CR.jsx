import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

export default () => (
  <div style={{ height: 500, padding: 20, background: '#ccc' }}>
    <SplitLayout.TRBLC.CRSplitLayout
      style={{ height: '100%' }}
      gutter={20}
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
