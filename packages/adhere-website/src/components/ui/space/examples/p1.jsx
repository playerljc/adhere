import React from 'react';

import { Space } from '@baifendian/adhere';

import styles from './examples.less';

export default () => {
  return (
    <div className={styles.Wrapper}>
      <a>编辑</a>
      <Space direction="horizontal" />
      <a>查看</a>
      <Space direction="horizontal" />
      <a>删除</a>
    </div>
  );
};
