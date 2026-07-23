import { Card } from 'antd';
import React from 'react';

import FlexLayout from '../../src/index';

import '../../src/index.less';
import '../index.less';

export default () => {
  return (
    <div className="wrap">
      <FlexLayout.TRBLC.LRTCBLayout
        style={{ height: '100%' }}
        gutter={16}
        autoInnerProps={{ gutter: 16 }}
        tProps={{
          fit: true,
          span: 4,
          children: <Card size="small">Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 4,
          children: <Card size="small">Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card size="small">Bottom</Card>,
        }}
        lProps={{
          fit: true,
          span: 4,
          children: <Card size="small">Left</Card>,
        }}
        cProps={{
          children: (
            <Card size="small" style={{ height: '100%', overflow: 'auto' }}>
              {Array.from({ length: 12 }).map((_, index) => (
                <p key={index}>Center content {index + 1}</p>
              ))}
            </Card>
          ),
        }}
      />
    </div>
  );
};
