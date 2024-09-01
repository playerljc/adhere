import { Card } from 'antd';
import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

import styles from './trblc.less';

export default () => {
  return (
    <div className={styles.Wrapper} style={{ background: '#ccc' }}>
      <FlexLayout.TRBLC.TCRLayout
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
};
