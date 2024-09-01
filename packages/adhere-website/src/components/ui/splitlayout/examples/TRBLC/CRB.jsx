import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

import styles from './trblc.less';

export default () => (
  <div className={styles.Wrapper}>
    <SplitLayout.TRBLC.CRBSplitLayout
      style={{ height: '100%' }}
      gutter={20}
      autoInnerProps={{ gutter: 20 }}
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
