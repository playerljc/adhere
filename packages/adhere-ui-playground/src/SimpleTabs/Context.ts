import React from 'react';

import type { TabContextValue } from '../types';

/**
 * 标签页上下文
 * @constant TabContext
 * @description 提供标签页组件间的状态共享，包含当前激活的标签页键值
 * @example
 * ```tsx
 * const { activeKey } = useContext(TabContext);
 * ```
 */
export const TabContext = React.createContext<TabContextValue>({
  activeKey: '',
});

/**
 * 标签页上下文提供者属性接口
 * @interface TabContextProviderProps
 * @description 定义标签页上下文提供者的属性
 */
export interface TabContextProviderProps {
  /** 当前激活的标签页键值 */
  activeKey: string;
  /** 子组件 */
  children: React.ReactNode;
}

/**
 * 标签页上下文钩子
 * @function useTabContext
 * @description 获取标签页上下文的钩子函数
 * @returns {TabContextValue} 标签页上下文值
 * @throws {Error} 当在TabContext.Provider外部使用时抛出错误
 * @example
 * ```tsx
 * const { activeKey } = useTabContext();
 * ```
 */
export const useTabContext = (): TabContextValue => {
  const context = React.useContext(TabContext);
  
  if (context === undefined) {
    throw new Error('useTabContext must be used within a TabContext.Provider');
  }
  
  return context;
};
