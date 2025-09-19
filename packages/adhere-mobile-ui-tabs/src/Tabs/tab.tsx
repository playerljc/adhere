import { Tabs } from 'antd-mobile';
import type { FC } from 'react';
import React from 'react';

import type { SystemTabProps } from '../types';

/**
 * 标签页子组件
 *
 * @param props - 组件属性
 * @returns JSX元素
 */
const Tab: FC<SystemTabProps> = (props) => {
  return <Tabs.Tab {...props}>{props.children}</Tabs.Tab>;
};

Tab.displayName = 'Tab';

export default Tab;
