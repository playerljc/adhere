import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

import styles from './base.less';

const { VerticalFlexLayout } = FlexLayout;

export default () => {
  return (
    <VerticalFlexLayout
      className={styles.Wrapper4}
      style={{ width: '100%', border: '1px solid #ccc' }}
      topClassName={styles.Wrapper6}
      bottomClassName={styles.Wrapper6}
      topStyle={{ borderBottom: '1px solid #ccc' }}
      bottomStyle={{ borderTop: '1px solid #ccc' }}
      renderTop={<div>Top</div>}
      renderMain={<div>Main</div>}
      renderBottom={<div>Bottom</div>}
    />
  );
};
