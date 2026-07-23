import { Card } from 'antd';
import React from 'react';

import FlexLayout from '../../src/index';

import '../../src/index.less';
import '../index.less';

export default () => {
  return (
    <div className="wrap">
      <FlexLayout.TRBLC.TCLayout
        style={{ height: '100%' }}
        gutter={16}
        tProps={{
          children: <Card size="small">Top</Card>,
        }}
        cProps={{
          children: <Card size="small">Center</Card>,
        }}
      />
    </div>
  );
};
