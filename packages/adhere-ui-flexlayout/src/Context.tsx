import React from 'react';

import type { ContextType } from './types';

/**
 * FlexLayout 上下文
 * 提供布局方向、栅格间隙和子元素信息给子组件
 * 
 * @type {React.Context<ContextType>}
 */
export const FlexContext = React.createContext<ContextType>({
  direction: 'vertical',
  gutter: 0,
  children: [],
});
