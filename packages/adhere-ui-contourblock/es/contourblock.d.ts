import React from 'react';
import Ratio from './Ratio';
import { ContourBlockProps } from './types';
/**
 * ContourBlock 组件
 *
 * 一个轮廓块组件，用于创建带有轮廓样式的容器块。
 * 支持自定义样式和类名，并继承所有 HTML div 元素的属性。
 *
 * @example
 * ```tsx
 * <ContourBlock className="custom-class" style={{ padding: '20px' }}>
 *   <p>这是轮廓块内的内容</p>
 * </ContourBlock>
 *
 * // 使用 Ratio 组件
 * <ContourBlock.Ratio aspectRatio="16:9" origin="width">
 *   <div>内容</div>
 * </ContourBlock.Ratio>
 * ```
 *
 * @param props - 组件属性
 * @param props.className - 自定义 CSS 类名
 * @param props.style - 自定义内联样式
 * @param props.children - 子元素内容
 * @param props.attrs - 其他 HTML div 属性
 * @returns JSX.Element
 */
declare const ContourBlock: React.NamedExoticComponent<ContourBlockProps & React.RefAttributes<HTMLDivElement>>;
declare const ContourBlockWithRatio: typeof ContourBlock & {
    Ratio: typeof Ratio;
};
export default ContourBlockWithRatio;
