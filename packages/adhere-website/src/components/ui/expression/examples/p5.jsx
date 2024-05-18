import React from 'react';

import { Expression } from '@baifendian/adhere';

import styles from '../index.less';

export default () => (
  <div>
    <Expression
      placeholder="请输入表达式"
      operators={Expression.SqlOptions}
      operatorClassName={styles.operatorClassName}
      textClassName={styles.textClassName}
    />
  </div>
);
