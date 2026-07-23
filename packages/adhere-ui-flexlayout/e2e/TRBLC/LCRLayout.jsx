import { Card } from 'antd';
import React from 'react';

import FlexLayout from '../../src/index';

import '../../src/index.less';
import '../index.less';

export default () => {
  return (
    <div className="wrap">
      <FlexLayout.TRBLC.LCRLayout
        style={{ height: '100%' }}
        gutter={16}
        lProps={{
          fit: true,
          span: 4,
          children: <Card size="small">Left</Card>,
        }}
        cProps={{
          children: <Card size="small">Center</Card>,
        }}
        rProps={{
          fit: true,
          span: 4,
          children: <Card size="small">Right</Card>,
        }}
      />
    </div>
  );
};
