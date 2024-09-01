import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

import styles from './trblc.less';

export default () => (
  <div className={styles.Wrapper}>
    <SplitLayout.TRBLC.TCRSplitLayout
      style={{ height: '100%' }}
      gutter={20}
      autoInnerProps={{ gutter: 20 }}
      tProps={{
        fit: true,
        span: 3,
        children: <Card>Top</Card>,
      }}
      rProps={{
        fit: true,
        span: 3,
        children: <Card>Right</Card>,
      }}
      cProps={{
        children: <Card>Center</Card>,
      }}
    />
  </div>
);
