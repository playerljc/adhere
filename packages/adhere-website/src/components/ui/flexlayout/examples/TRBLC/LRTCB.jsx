import { Card } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

export default () => {
  return (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.LRTCBLayout
        style={{ height: '100%' }}
        gutter={50}
        autoInnerProps={{ gutter: [0, 30] }}
        tProps={{
          fit: true,
          span: 4,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        lProps={{
          fit: true,
          style: { width: '50%' },
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  );
};
