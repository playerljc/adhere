import { Card } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

import styles from './trblc.less';

export default () => {
  return (
    <div className={styles.Wrapper} style={{ background: '#ccc' }}>
      <FlexLayout.TRBLC.CBLayout
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
};
