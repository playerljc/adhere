import { Card } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

import styles from './trblc.less';

export default () => {
  return (
    <div className={styles.Wrapper} style={{ background: '#ccc' }}>
      <FlexLayout.TRBLC.TLRCLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  );
};
