import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

export default () => (
  <div style={{ height: 500, padding: 20, background: '#ccc' }}>
    <SplitLayout.TRBLC.LTCSplitLayout
      style={{ height: '100%' }}
      gutter={20}
      autoInnerProps={{ gutter: [0, 20] }}
      lProps={{
        fit: true,
        span: 3,
        children: <Card>Left</Card>,
      }}
      tProps={{
        fit: true,
        span: 3,
        children: <Card>Top</Card>,
      }}
      cProps={{
        children: <Card>Center</Card>,
      }}
    />
  </div>
);
