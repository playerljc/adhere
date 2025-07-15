import { FC } from 'react';
import type { ConditionalRenderShowProps } from './types';
/**
 * ConditionalRenderVisibility 组件
 * @description 通过切换CSS的visibility属性来控制元素的显示和隐藏
 * @class ConditionalRenderVisibility
 * @classdesc 只能用于children或noMatch为HTML元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
 * 根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
 *
 * @example
 * ```tsx
 * // 基本用法
 * <ConditionalRender.Visibility conditional={isVisible}>
 *   <div>显示的内容</div>
 * </ConditionalRender.Visibility>
 *
 * // 带noMatch的用法
 * <ConditionalRender.Visibility
 *   conditional={isVisible}
 *   noMatch={<div>隐藏时的内容</div>}
 * >
 *   <div>显示的内容</div>
 * </ConditionalRender.Visibility>
 *
 * // 数组用法
 * <ConditionalRender.Visibility conditional={isVisible}>
 *   {[
 *     <div key="1">内容1</div>,
 *     <div key="2">内容2</div>
 *   ]}
 * </ConditionalRender.Visibility>
 * ```
 *
 * @note 与Show组件的区别：
 * - Show组件使用display: none/block，元素完全从布局中移除
 * - Visibility组件使用visibility: hidden/visible，元素仍占据空间但不可见
 */
declare const ConditionalRenderVisibility: FC<ConditionalRenderShowProps>;
export default ConditionalRenderVisibility;
