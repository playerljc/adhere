import { Card } from 'antd';
import React from 'react';

import { SplitLayout } from '@baifendian/adhere';

import styles from './trblc.less';

export default () => (
  <div className={styles.Wrapper}>
    <SplitLayout.TRBLC.TCSplitLayout
      style={{ height: '100%' }}
      gutter={20}
      tProps={{
        span: 12,
        fit: true,
        children: <Card>top</Card>,
      }}
      cProps={{
        children: <Card>center</Card>,
      }}
    />
  </div>
);
