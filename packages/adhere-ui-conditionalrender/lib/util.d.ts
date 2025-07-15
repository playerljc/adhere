import type { Deal, DealResult } from './types';
/**
 * 处理元素的样式属性
 * @description 根据条件为React元素添加或修改CSS样式属性
 * @param params - 处理参数
 * @param params.element - 要处理的React元素
 * @param params.conditional - 控制条件（当前未使用，保留用于未来扩展）
 * @param params.prop - CSS属性名
 * @param params.value - CSS属性值
 * @returns 处理后的React元素或元素数组
 *
 * @example
 * ```tsx
 * // 隐藏元素
 * deal({
 *   element: <div>内容</div>,
 *   conditional: false,
 *   prop: 'display',
 *   value: 'none'
 * });
 *
 * // 显示元素
 * deal({
 *   element: <div>内容</div>,
 *   conditional: true,
 *   prop: 'visibility',
 *   value: 'visible'
 * });
 * ```
 */
export declare function deal({ element, conditional, prop, value, }: Deal): DealResult;
