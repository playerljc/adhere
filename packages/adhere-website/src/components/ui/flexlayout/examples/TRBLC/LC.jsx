import { Card } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

export default () => {
  return (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.LCLayout
        style={{ height: '100%' }}
        gutter={20}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  );
};
