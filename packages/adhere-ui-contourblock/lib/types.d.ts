import type { CSSProperties, ReactNode, HTMLAttributes } from 'react';
/**
 * ContourBlock 组件的属性接口
 * @interface ContourBlockProps
 * @extends {HTMLAttributes<HTMLDivElement>} 继承 HTML div 元素的所有属性
 */
export interface ContourBlockProps extends HTMLAttributes<HTMLDivElement> {
    /** 自定义 CSS 类名 */
    className?: string;
    /** 自定义内联样式 */
    style?: CSSProperties;
    /** 子元素内容 */
    children?: ReactNode;
}
/**
 * Ratio 组件的属性接口
 * @interface RatioProps
 * @extends {HTMLAttributes<HTMLDivElement>} 继承 HTML div 元素的所有属性
 */
export interface RatioProps extends HTMLAttributes<HTMLDivElement> {
    /** 自定义 CSS 类名 */
    className?: string;
    /** 自定义内联样式 */
    style?: CSSProperties;
    /** 子元素内容 */
    children?: ReactNode;
    /** 宽高比，支持数字（如 16/9）或字符串（如 "16:9" 或 "16/9"） */
    aspectRatio: number | string;
    /** 基准方向，width 表示根据宽度计算高度，height 表示根据高度计算宽度，默认为 width */
    origin?: 'width' | 'height';
}
