import type { PopoverRef } from 'antd-mobile/es/components/popover';
import React from 'react';

/**
 * 弹出菜单上下文接口
 */
export interface PopoverMenuContextType {
  /** Popover 引用数组，用于统一管理所有弹出层 */
  refs: PopoverRef[];
}

/**
 * 弹出菜单上下文
 * 用于在组件树中共享 Popover 引用，实现统一关闭功能
 */
const PopoverMenuContext = React.createContext<PopoverMenuContextType>({
  refs: [],
});

export default PopoverMenuContext;
