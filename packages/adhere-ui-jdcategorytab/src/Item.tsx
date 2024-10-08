import classNames from 'classnames';
import React, { memo } from 'react';

import type { JdCategoryTabItemProps } from './types';

const selectorPrefix = 'adhere-ui-jd-category-tab';

const JdCategoryTabItem = memo<JdCategoryTabItemProps>((props) => {
  const { children, className = '', style = {} } = props;

  return (
    <li className={classNames(`${selectorPrefix}-tab-item`, className ?? '')} style={style ?? {}}>
      {children}
    </li>
  );
});

JdCategoryTabItem.displayName = 'JdCategoryTabItem';

export default JdCategoryTabItem;
