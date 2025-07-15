import React from 'react';

import type { TreeNodeContext } from './types';

/**
 * 树节点上下文
 * 提供树节点间的通信机制，用于处理父子节点的选中状态更新
 */
export default React.createContext<TreeNodeContext>({} as TreeNodeContext);
