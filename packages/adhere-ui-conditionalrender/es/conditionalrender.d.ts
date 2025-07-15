import type { ConditionalRenderComponent } from './types';
/**
 * 条件渲染组件
 * @description 一个功能丰富的条件渲染组件，支持多种渲染模式
 *
 * @example
 * ```tsx
 * // 基本用法
 * <ConditionalRender conditional={isVisible}>
 *   {() => <div>显示的内容</div>}
 * </ConditionalRender>
 *
 * // 带noMatch的用法
 * <ConditionalRender
 *   conditional={isVisible}
 *   noMatch={() => <div>隐藏时的内容</div>}
 * >
 *   {() => <div>显示的内容</div>}
 * </ConditionalRender>
 *
 * // 使用Show子组件（通过display控制）
 * <ConditionalRender.Show conditional={isVisible}>
 *   <div>显示的内容</div>
 * </ConditionalRender.Show>
 *
 * // 使用Visibility子组件（通过visibility控制）
 * <ConditionalRender.Visibility conditional={isVisible}>
 *   <div>显示的内容</div>
 * </ConditionalRender.Visibility>
 * ```
 */
declare const ConditionalRender: ConditionalRenderComponent;
export default ConditionalRender;
