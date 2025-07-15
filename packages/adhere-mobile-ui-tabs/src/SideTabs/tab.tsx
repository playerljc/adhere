import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';

import type { SystemSideTabProps } from '../types';

const selectorPrefix = 'adhere-ui-tabs-side-tab';

/**
 * 侧边栏标签页子组件
 * 
 * @param props - 组件属性
 * @returns JSX元素
 */
const Tab: FC<SystemSideTabProps> = (props) => {
  const { className = '', style = {}, children } = props;

  return (
    <div className={classNames(selectorPrefix, className)} style={style ?? {}}>
      {children}
    </div>
  );
};

Tab.displayName = 'Tab';

export default Tab;
