import React from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';

import styles from './base.less';

const { Fixed, Auto } = FlexLayout;

export default () => {
  return (
    <>
      <FlexLayout className={styles.Wrapper3} style={{ border: '1px solid #ccc' }}>
        <Fixed>Top</Fixed>
        <Auto fit={false} autoFixed={false} style={{ overflowY: 'auto' }}>
          <p>今天是个好日子</p>
          <p>今天是个好日子</p>
          <p>今天是个好日子</p>
          <p>今天是个好日子</p>
          <p>今天是个好日子</p>
          <p>今天是个好日子</p>
          <p>今天是个好日子</p>
          <p>今天是个好日子</p>
          <p>今天是个好日子</p>
          <p>今天是个好日子</p>
        </Auto>
      </FlexLayout>

      <Space direction="vertical" />

      <FlexLayout
        direction="horizontal"
        className={styles.Wrapper3}
        style={{ overflow: 'auto', border: '1px solid #ccc' }}
      >
        <Fixed>Left</Fixed>
        <Auto fit={false} autoFixed={false}>
          111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        </Auto>
      </FlexLayout>
    </>
  );
};
