import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

export default () => (
  <div style={{ height: 500, padding: 20, background: '#ccc' }}>
    <SplitLayout.TRBLC.TLCSplitLayout
      style={{ height: '100%' }}
      gutter={20}
      autoInnerProps={{ gutter: [0, 20] }}
      tProps={{
        fit: true,
        span: 8,
        children: <Card>Top</Card>,
      }}
      lProps={{
        fit: true,
        span: 8,
        children: <Card>Left</Card>,
      }}
      cProps={{
        children: <Card>center</Card>,
      }}
    />
  </div>
);
