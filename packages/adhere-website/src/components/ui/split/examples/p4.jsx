import React from 'react';

import { Split } from '@baifendian/adhere';

import styles from './examples.less';

export default () => (
  <div>
    <div className={styles.Wrapper}>
      <Split.Group direction="horizontal">
        <a>编辑</a>
        <a>查看</a>
        <a>删除</a>
      </Split.Group>
    </div>

    <Split.Group direction="vertical">
      <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
      <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
    </Split.Group>
  </div>
);
