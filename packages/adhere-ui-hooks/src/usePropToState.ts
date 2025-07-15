import { useUpdateEffect } from 'ahooks';
import { Dispatch, SetStateAction, useState } from 'react';

import type { UsePropToState } from './types';

/**
 * usePropToState hook
 * @description 将 props 中的值转换为 state，用于在组件内部对 props 进行更新操作
 * @template T - 状态类型
 * @param {T} propValue - props 中的值
 * @returns {UsePropToStateReturn<T>} 返回状态值和设置函数
 * 
 * @example
 * ```tsx
 * interface Props {
 *   initialValue: string;
 * }
 * 
 * const MyComponent: React.FC<Props> = ({ initialValue }) => {
 *   const [value, setValue] = usePropToState(initialValue);
 *   
 *   // 当 props 中的 initialValue 变化时，state 会自动同步
 *   // 同时可以在组件内部修改 value
 *   
 *   return (
 *     <input 
 *       value={value} 
 *       onChange={(e) => setValue(e.target.value)} 
 *     />
 *   );
 * };
 * ```
 */
function usePropToState<T>(propValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(propValue);

  // 当 props 变化时同步更新 state
  useUpdateEffect(() => {
    setValue(propValue);
  }, [propValue]);

  return [value, setValue];
}

export default usePropToState;
