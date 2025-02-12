import React from 'react';

import { SubmitButton } from '@baifendian/adhere-ui-anthoc';

import styles from './index.less';

export default () => (
  <SubmitButton
    className={styles.Wrapper}
    type="primary"
    onClick={() => new Promise((resolve) => setTimeout(resolve, 3000))}
  >
    提交
  </SubmitButton>
);
