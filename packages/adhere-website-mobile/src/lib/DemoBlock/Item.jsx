import classNames from 'classnames';
import React from 'react';

import styles from './Item.less';

export default ({
  className,
  style,
  titleClassName,
  titleStyle,
  bodyClassName,
  bodyStyle,
  title,
  children,
}) => (
  <div className={classNames(styles.Wrap, className)} style={style ?? {}}>
    <div className={classNames(styles.Title, titleClassName)} style={titleStyle ?? {}}>
      {title}
    </div>
    <div className={classNames(styles.Body, bodyClassName)} style={bodyStyle ?? {}}>
      {children}
    </div>
  </div>
);
