import React from 'react';

import { Split } from '@baifendian/adhere';

import styles from './examples.less';

export default () => {
  return (
    <div className={styles.Wrapper}>
      <a>编辑</a>
      <Split direction="horizontal" />
      <a>查看</a>
      <Split direction="horizontal" />
      <a>删除</a>
    </div>
  );
};
