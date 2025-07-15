import React, { memo } from 'react';

import ConditionalRenderShow from './Show';
import ConditionalRenderVisibility from './Visibility';
import type { ConditionalRenderComponent, ConditionalRenderProps } from './types';

/**
 * 内部条件渲染组件
 * @description 根据条件决定渲染内容或noMatch内容
 */
const InternalConditionalRender = memo<ConditionalRenderProps>((props) => {
  const { conditional, noMatch, children } = props;

  // 当条件满足时，渲染children
  if (conditional) {
    return typeof children === 'function' ? children() : children;
  }

  // 当条件不满足时，渲染noMatch或返回null
  return typeof noMatch === 'function' ? noMatch() : noMatch || null;
});

// 设置组件显示名称
InternalConditionalRender.displayName = 'InternalConditionalRender';

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
const ConditionalRender = InternalConditionalRender as ConditionalRenderComponent;

// 添加子组件
ConditionalRender.Show = ConditionalRenderShow;
ConditionalRender.Visibility = ConditionalRenderVisibility;

/**
 * 条件渲染函数
 * @description 静态方法：根据条件返回对应的值
 * @param params - 参数对象
 * @param params.conditional - 控制条件
 * @param params.match - 条件满足时的返回值
 * @param params.noMatch - 条件不满足时的返回值
 * @returns 根据条件返回match或noMatch的值
 * 
 * @example
 * ```tsx
 * // 基本用法
 * const result = ConditionalRender.conditionalRender({
 *   conditional: isVisible,
 *   match: '显示',
 *   noMatch: '隐藏'
 * });
 * 
 * // 返回JSX
 * const element = ConditionalRender.conditionalRender({
 *   conditional: isVisible,
 *   match: <div>显示的内容</div>,
 *   noMatch: <div>隐藏的内容</div>
 * });
 * ```
 */
ConditionalRender.conditionalRender = function ({ conditional, match, noMatch }) {
  return conditional ? match : noMatch || null;
};

/**
 * 条件过滤数组
 * @description 静态方法：过滤包含条件渲染属性的React元素数组
 * @param arr - 要过滤的React元素数组
 * @returns 过滤后的React元素数组
 * 
 * @example
 * ```tsx
 * const elements = [
 *   <ConditionalRender conditional={true}>内容1</ConditionalRender>,
 *   <ConditionalRender conditional={false}>内容2</ConditionalRender>,
 *   <div>普通内容</div>
 * ];
 * 
 * const filtered = ConditionalRender.conditionalArr(elements);
 * // 结果：只包含条件为true的元素和普通元素
 * ```
 */
ConditionalRender.conditionalArr = function (arr: React.ReactElement[]): React.ReactElement[] {
  return arr.filter((element) => {
    // 检查元素是否有conditional属性
    if (element.props && 'conditional' in element.props) {
      const { conditional, noMatch } = element.props;
      
      // 如果条件不满足，检查是否有noMatch且noMatch不为null
      if (!conditional) {
        return noMatch && (typeof noMatch === 'function' ? noMatch() : noMatch) !== null;
      }
    }

    return true;
  });
};

/**
 * 过滤非空数组
 * @description 静态方法：过滤数组中的null和undefined值
 * @param arr - 要过滤的数组
 * @returns 过滤后的数组
 * 
 * @example
 * ```tsx
 * const arr = [1, null, 2, undefined, 3];
 * const filtered = ConditionalRender.conditionalNotEmptyArr(arr);
 * // 结果：[1, 2, 3]
 * ```
 * 
 * @deprecated 建议使用原生的Array.filter方法替代
 */
ConditionalRender.conditionalNotEmptyArr = function <T>(arr: (T | null | undefined)[]): T[] {
  return arr.filter((item): item is T => item !== null && item !== undefined);
};

// 设置组件显示名称
ConditionalRender.displayName = 'ConditionalRender';

export default ConditionalRender;
