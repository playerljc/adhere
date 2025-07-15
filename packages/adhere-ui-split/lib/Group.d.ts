import { FC } from 'react';
import type { SplitGroupProps } from './types';
/**
 * SplitGroup组件 - 自动在子元素之间插入分割条
 *
 * @param props - SplitGroup组件的属性
 * @returns 渲染后的组件，在子元素之间自动插入分割条
 *
 * @example
 * ```tsx
 * <SplitGroup direction="vertical" size={10}>
 *   <div>第一个元素</div>
 *   <div>第二个元素</div>
 *   <div>第三个元素</div>
 * </SplitGroup>
 * ```
 */
declare const SplitGroup: FC<SplitGroupProps>;
export default SplitGroup;
