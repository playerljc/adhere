import { Card } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

export default () => {
  return (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.LCRBLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
      />
    </div>
  );
};
