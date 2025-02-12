import { Card } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

import styles from './trblc.less';

export default () => {
  return (
    <div className={styles.Wrapper} style={{ background: '#ccc' }}>
      <FlexLayout.TRBLC.LCBLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: 20 }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
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
};
