import React from 'react';

import { FlexLayout, Space, SplitLayout } from '@baifendian/adhere';

import styles from './basic.less';

const { Fixed, Auto } = FlexLayout;

export default () => (
  <>
    <FlexLayout
      direction="horizontal"
      className={styles.Wrapper}
      style={{ border: '1px solid #ccc' }}
    >
      <Fixed className={styles.Wrapper1} />
      <SplitLayout />
      <Auto />
      <SplitLayout />
      <Fixed className={styles.Wrapper2} />
    </FlexLayout>

    <Space size={30} />

    <FlexLayout className={styles.Wrapper} style={{ border: '1px solid #ccc' }}>
      <Fixed className={styles.Wrapper1} />
      <SplitLayout style={{ width: 'auto' }} />
      <Auto />
      <SplitLayout style={{ width: 'auto' }} />
      <Fixed className={styles.Wrapper1} />
    </FlexLayout>
  </>
);
