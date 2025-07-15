import React from 'react';

import type { TreeContext } from './types';

/**
 * 树组件上下文
 * 提供树组件的全局状态管理，包括展开、选中、勾选等状态
 */
export default React.createContext<TreeContext>({} as TreeContext);
