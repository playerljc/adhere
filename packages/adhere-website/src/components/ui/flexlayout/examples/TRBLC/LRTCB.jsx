import { Card } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

import styles from './trblc.less';

export default () => {
  return (
    <div className={styles.Wrapper} style={{ background: '#ccc' }}>
      <FlexLayout.TRBLC.LRTCBLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: 20 }}
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
