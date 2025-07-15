import React from 'react';

import type { CodeBoxContextValue } from './types';

/**
 * 代码盒子上下文
 * @constant CodeBoxContext
 * @description 提供代码盒子组件间的状态共享
 */
export const CodeBoxContext = React.createContext<CodeBoxContextValue>({
  activeAnchor: '',
});
