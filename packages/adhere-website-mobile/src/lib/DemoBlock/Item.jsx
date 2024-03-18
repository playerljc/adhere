import classNames from 'classnames';
import React from 'react';

import styles from './Item.less';

export default ({ className, style, title, children }) => (
  <div className={classNames(styles.Wrap, className)} style={style ?? {}}>
    <div className={styles.Title}>{title}</div>
    <div className={styles.Body}>{children}</div>
  </div>
);
