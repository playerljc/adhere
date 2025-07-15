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
