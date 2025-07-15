import { FC } from 'react';
import type { ConditionalRenderShowProps } from './types';
/**
 * ConditionalRenderShow 组件
 * @description 通过切换CSS的display属性来控制元素的显示和隐藏
 * @class ConditionalRenderShow
 * @classdesc 只能用于children或noMatch为HTML元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
 * 根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
 *
 * @example
 * ```tsx
 * // 基本用法
 * <ConditionalRender.Show conditional={isVisible}>
 *   <div>显示的内容</div>
 * </ConditionalRender.Show>
 *
 * // 带noMatch的用法
 * <ConditionalRender.Show
 *   conditional={isVisible}
 *   noMatch={<div>隐藏时的内容</div>}
 * >
 *   <div>显示的内容</div>
 * </ConditionalRender.Show>
 *
 * // 数组用法
 * <ConditionalRender.Show conditional={isVisible}>
 *   {[
 *     <div key="1">内容1</div>,
 *     <div key="2">内容2</div>
 *   ]}
 * </ConditionalRender.Show>
 * ```
 */
declare const ConditionalRenderShow: FC<ConditionalRenderShowProps>;
export default ConditionalRenderShow;
