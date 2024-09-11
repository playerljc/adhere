import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

import styles from './trblc.less';

export default () => (
  <div className={styles.Wrapper}>
    <SplitLayout.TRBLC.TCBSplitLayout
      style={{ height: '100%' }}
      gutter={20}
      tProps={{
        span: 3,
        fit: true,
        children: <Card>top</Card>,
      }}
      cProps={{
        children: <Card>center</Card>,
      }}
      bProps={{
        span: 3,
        fit: true,
        children: <Card>bottom</Card>,
      }}
    />
  </div>
);
