import type { ReactElement, ReactNode } from 'react';

/**
 * ForceUpdate 组件的属性接口
 * @interface ForceUpdateProps
 * @description 用于强制更新子组件的属性配置
 */
export interface ForceUpdateProps {
  /**
   * 需要强制更新的子组件
   * @description 当调用 reMount 方法时，会重新渲染这个子组件
   */
  children: ReactElement;
}

/**
 * ForceUpdate 组件的引用句柄接口
 * @interface ForceUpdateRefHandle
 * @description 提供强制重新挂载子组件的方法
 */
export interface ForceUpdateRefHandle {
  /**
   * 强制重新挂载子组件
   * @description 通过生成新的 key 来强制 React 重新创建子组件实例
   * @returns {Promise<void>} 重新挂载完成的 Promise
   * @example
   * ```tsx
   * const forceUpdateRef = useRef<ForceUpdateRefHandle>(null);
   * 
   * // 强制重新挂载
   * await forceUpdateRef.current?.reMount();
   * ```
   */
  reMount: () => Promise<void>;
}
