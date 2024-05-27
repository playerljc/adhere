import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

import styles from './base.less';

const { HorizontalFlexLayout } = FlexLayout;

export default () => {
  return (
    <HorizontalFlexLayout
      className={styles.Wrapper4}
      style={{ width: '100%', border: '1px solid #ccc' }}
      leftClassName={styles.Wrapper5}
      rightClassName={styles.Wrapper5}
      leftStyle={{ borderRight: '1px solid #ccc' }}
      rightStyle={{ borderLeft: '1px solid #ccc' }}
      renderLeft={<div>Left</div>}
      renderMain={<div>Main</div>}
      renderRight={<div>Right</div>}
    />
  );
};
