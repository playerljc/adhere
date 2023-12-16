import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

export default () => (
  <div style={{ height: 500, padding: 20, background: '#ccc' }}>
    <SplitLayout.TRBLC.TCSplitLayout
      style={{ height: '100%' }}
      gutter={20}
      tProps={{
        span: 12,
        fit: true,
        children: <Card>top</Card>,
      }}
      cProps={{
        children: <Card>center</Card>,
      }}
    />
  </div>
);
