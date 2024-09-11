import { Card } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

import styles from './trblc.less';

export default () => {
  return (
    <div className={styles.Wrapper} style={{ background: '#ccc' }}>
      <FlexLayout.TRBLC.TLCLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: 20 }}
        tProps={{
          fit: true,
          span: 8,
          children: <Card>Top</Card>,
        }}
        lProps={{
          fit: true,
          span: 8,
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  );
};
