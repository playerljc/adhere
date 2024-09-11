import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

import styles from './trblc.less';

export default () => (
  <div className={styles.Wrapper}>
    <SplitLayout.TRBLC.CBSplitLayout
      style={{ height: '100%' }}
      gutter={20}
      bProps={{
        span: 12,
        fit: true,
        children: <Card>bottom</Card>,
      }}
      cProps={{
        children: <Card>center</Card>,
      }}
    />
  </div>
);
