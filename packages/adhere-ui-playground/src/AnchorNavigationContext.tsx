import React from 'react';

import type { AnchorNavigationContextValue } from './types';

/**
 * 锚点导航上下文
 * @constant AnchorNavigationContext
 * @description 提供锚点导航组件间的状态共享
 */
export const AnchorNavigationContext = React.createContext<AnchorNavigationContextValue>({
  scrollEl: null,
});
