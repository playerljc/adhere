import classNames from 'classnames';
import React, { FC } from 'react';

import type { JdCategoryTabItemProps } from './types';

const selectorPrefix = 'adhere-ui-jdcategorytab';

const JdCategoryTabItem: FC<JdCategoryTabItemProps> = (props) => {
  const { children, className = '', style = {} } = props;

  return (
    <li className={classNames(`${selectorPrefix}-tab-item`, className || '')} style={style || {}}>
      {children}
    </li>
  );
};

export default JdCategoryTabItem;
