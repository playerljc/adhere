import React from 'react';

import styles from './item.less';

export default ({ title, children }) => (
  <div className={styles.Wrap}>
    <div className={styles.Title}>{title}</div>
    <div className={styles.Body}>{children}</div>
  </div>
);
