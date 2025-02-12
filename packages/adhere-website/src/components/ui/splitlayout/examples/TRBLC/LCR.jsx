import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

import styles from './trblc.less';

export default () => (
  <div className={styles.Wrapper}>
    <SplitLayout.TRBLC.LCRSplitLayout
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
      rProps={{
        fit: true,
        span: 3,
        children: <Card>Right</Card>,
      }}
    />
  </div>
);
