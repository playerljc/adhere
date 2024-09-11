import React from 'react';

import { Space } from '@baifendian/adhere';

import styles from './examples.less';

export default () => (
  <div>
    <div className={styles.Wrapper}>
      <a>编辑</a>
      <Space direction="horizontal" size={10} />
      <a>查看</a>
      <Space direction="horizontal" size={10} />
      <a>删除</a>
    </div>

    <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
    <Space direction="vertical" size={10} />
    <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
  </div>
);
