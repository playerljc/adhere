import { Card } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

export default () => {
  return (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <FlexLayout.TRBLC.TCLayout
        style={{ height: '100%' }}
        gutter={20}
        tProps={{
          children: <Card>top</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  );
};
