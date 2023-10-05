import classNames from 'classnames';
import React from 'react';

import Item from './item';

import styles from './index.less';

const DemoBlock = ({ children, className, style }) => (
  <div className={classNames(styles.Wrap, className)} style={style ?? {}}>
    {children}
  </div>
);

DemoBlock.Item = Item;

export default DemoBlock;
