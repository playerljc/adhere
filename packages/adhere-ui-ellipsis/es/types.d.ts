import type { CSSProperties, ReactNode, MouseEvent } from 'react';
import { Options } from '@popperjs/core/lib/types';
/**
 * Ellipsis 组件的属性接口
 * @interface EllipsisProps
 */
export interface EllipsisProps {
    /** 自定义 CSS 类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 提示内容(如果没有则是children，只能是纯文本) */
    tooltip?: string;
    /** 是否换行显示 */
    wrap?: boolean;
    /** 显示的行数，仅在 wrap 为 true 时生效 */
    wrapLines?: number;
    /** tooltip 最大字符数，超过此长度将显示展开/收起按钮 */
    tooltipMaxLength?: number;
    /** 是否使用原生 title 属性作为 tooltip */
    isUseNativeTooltip?: boolean;
    /** 触发 tooltip 显示的事件类型 */
    trigger?: 'hover' | 'click' | 'focus' | Array<'hover' | 'click' | 'focus'>;
    /** 自定义 tooltip 的 CSS 类名(仅在 isUseNativeTooltip 为 false 时生效) */
    tooltipClassName?: string;
    /** 自定义 tooltip 的样式(仅在 isUseNativeTooltip 为 false 时生效) */
    tooltipStyle?: CSSProperties;
    /** 自定义 tooltip 箭头的 CSS 类名(仅在 isUseNativeTooltip 为 false 时生效) */
    tooltipArrowClassName?: string;
    /** 自定义 tooltip 箭头的样式(仅在 isUseNativeTooltip 为 false 时生效) */
    tooltipArrowStyle?: CSSProperties;
    /** 展开按钮内容(tooltip 长度大于 tooltipMaxLength 时生效) */
    tooltipMore?: ReactNode;
    /** 收起按钮内容(tooltip 长度大于 tooltipMaxLength 时生效) */
    tooltipClose?: ReactNode;
    /** 自定义 tooltip 的 popper.js 配置选项 */
    customTooltipOptions?: Options;
    /** 子元素内容，支持纯文本 */
    children?: string;
    /** 使用 innerHTML 渲染内容 */
    dangerouslySetInnerHTML?: {
        __html: string;
    };
}
/**
 * More 按钮组件的属性接口
 * @interface MoreProps
 */
export interface MoreProps {
    /** 子元素 */
    children: ReactNode;
    /** 点击事件处理函数 */
    onClick: (event: MouseEvent<HTMLDivElement>) => void;
}
/**
 * 计算后的样式对象类型
 * @interface ComputedStyle
 */
export interface ComputedStyle extends CSSProperties {
    WebkitLineClamp?: number | 'unset';
}
