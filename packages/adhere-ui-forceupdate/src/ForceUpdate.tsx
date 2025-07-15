import { cloneElement, forwardRef, useImperativeHandle, useCallback } from 'react';
import { v1 } from 'uuid';

import Hooks from '@baifendian/adhere-ui-hooks';

import type { ForceUpdateProps, ForceUpdateRefHandle } from './types';

const { useSetState } = Hooks;

/**
 * ForceUpdate 组件
 * @description 通过改变子组件的 key 属性来强制重新挂载子组件
 * @template T - 子组件的属性类型
 * @param props - 组件属性
 * @param ref - 转发引用
 * @returns 包装后的子组件
 * 
 * @example
 * ```tsx
 * import ForceUpdate from '@baifendian/adhere-ui-forceupdate';
 * 
 * const MyComponent = () => {
 *   const forceUpdateRef = useRef<ForceUpdateRefHandle>(null);
 * 
 *   const handleForceUpdate = async () => {
 *     await forceUpdateRef.current?.reMount();
 *   };
 * 
 *   return (
 *     <div>
 *       <button onClick={handleForceUpdate}>强制更新</button>
 *       <ForceUpdate ref={forceUpdateRef}>
 *         <ExpensiveComponent />
 *       </ForceUpdate>
 *     </div>
 *   );
 * };
 * ```
 */
const ForceUpdate = forwardRef<ForceUpdateRefHandle, ForceUpdateProps>((props, ref) => {
  const { children } = props;

  // 使用 uuid v1 生成唯一的 key
  const [keyRef, setKey] = useSetState<string>(v1());

  /**
   * 强制重新挂载子组件
   * @description 通过生成新的 key 来强制 React 重新创建子组件实例
   * @returns Promise<void> 重新挂载完成的 Promise
   */
  const reMount = useCallback(async (): Promise<void> => {
    return new Promise<void>((resolve) => {
      setKey(v1(), () => resolve());
    });
  }, [setKey]);

  // 暴露 reMount 方法给父组件
  useImperativeHandle(
    ref,
    () => ({
      reMount,
    }),
    [reMount]
  );

  // 克隆子组件并添加新的 key
  return cloneElement(children, {
    key: keyRef.current,
    ...(children.props ?? {}),
  });
});

ForceUpdate.displayName = 'ForceUpdate';

export default ForceUpdate;
