import { Card } from 'antd';
import React from 'react';

import FlexLayout from '../../src/index';

import '../../src/index.less';
import '../index.less';

export default () => {
  return (
    <div className="wrap">
      <FlexLayout.TRBLC.TBLCRLayout
        style={{ height: '100%' }}
        gutter={16}
        autoWrapProps={{ autoFixed: false }}
        autoInnerProps={{ autoFixed: true, gutter: 16 }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card size="small">Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card size="small">Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card size="small">Bottom</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card size="small">Left</Card>,
        }}
        cProps={{
          autoFixed: false,
          children: <Card size="small">Center</Card>,
        }}
      />
    </div>
  );
};
