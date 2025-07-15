import React from 'react';

import type { PlayGroundPageContextValue } from '../types';

/**
 * PlayGround页面上下文
 * @constant PlayGroundPageContext
 * @description 提供PlayGround页面组件间的状态共享
 */
export const PlayGroundPageContext = React.createContext<PlayGroundPageContextValue>({
  scrollEl: null,
});
