import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

import styles from './base.less';

const { VerticalFlexLayout, HorizontalFlexLayout } = FlexLayout;

export default () => {
  return (
    <HorizontalFlexLayout
      leftClassName={styles.Wrapper5}
      rightClassName={styles.Wrapper5}
      style={{ width: '100%', border: '1px solid #ccc' }}
      leftStyle={{ borderRight: '1px solid #ccc' }}
      rightStyle={{ borderLeft: '1px solid #ccc' }}
      renderLeft={<div>Left</div>}
      renderMain={
        <VerticalFlexLayout
          className={styles.Wrapper4}
          style={{ width: '100%' }}
          topClassName={styles.Wrapper6}
          bottomClassName={styles.Wrapper6}
          topStyle={{ borderBottom: '1px solid #ccc' }}
          bottomStyle={{ borderTop: '1px solid #ccc' }}
          renderTop={<div>Top</div>}
          renderMain={<div>Main</div>}
          renderBottom={<div>Bottom</div>}
        />
      }
      renderRight={<div>Right</div>}
    />
  );
};
