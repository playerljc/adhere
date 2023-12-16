import { Card } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

export default () => {
  return (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.TLCLayout
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
};
