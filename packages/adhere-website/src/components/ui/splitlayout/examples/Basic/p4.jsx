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
      <Fixed className={styles.Wrapper2} />
      <SplitLayout minSize="20%" maxSize="50%" />
      <Auto />
    </FlexLayout>

    <Space size={30} />

    <FlexLayout className={styles.Wrapper5} style={{ border: '1px solid #ccc' }}>
      <Fixed className={styles.Wrapper1} />
      <SplitLayout minSize="20%" maxSize="50%" style={{ width: 'auto' }} />
      <Auto />
    </FlexLayout>
  </>
);
