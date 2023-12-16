import React from 'react';

import { Expression } from '@baifendian/adhere';
import Sql from '@baifendian/adhere-ui-expression/es/operators/Sql';

import styles from '../index.less';

export default () => (
  <div>
    <Expression
      placeholder="请输入表达式"
      operators={Sql}
      operatorClassName={styles.operatorClassName}
      textClassName={styles.textClassName}
    />
  </div>
);
