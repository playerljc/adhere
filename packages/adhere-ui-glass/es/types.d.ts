import type { CSSProperties } from 'react';
/** 四个角键名 */
export type GlassCornerKey = 'leftTop' | 'rightTop' | 'rightBottom' | 'leftBottom';
/** 角亮/暗枚举 */
export type GlassCornerMode = 'light' | 'dark';
/** corners 配置：每角可选亮或暗 */
export type GlassCorners = Partial<Record<GlassCornerKey, GlassCornerMode>>;
/** 边线性渐变方向（与 CSS linear-gradient 一致） */
export type GlassEdgeGradientDirection = 'to right' | 'to bottom';
/** 边渐变 stop 对（a/b 为百分比或 var(...) 字符串） */
export interface GlassGradientStopPair {
    a: string;
    b: string;
}
/**
 * Glass 根节点上注入的 CSS 变量（与 index.less 配套）
 */
export interface GlassRootCSSVars extends CSSProperties {
    '--glass-border-color'?: string;
    '--border-width'?: string;
    '--border-radius'?: string;
    '--gradient-position-start'?: string;
    '--gradient-position-primary'?: string;
    '--gradient-position-secondary'?: string;
    '--gradient-position-end'?: string;
    '--gradient-color-strong'?: string;
    '--gradient-color-medium'?: string;
    '--gradient-color-light'?: string;
    '--glass-border-background-image'?: string;
}
/**
 * Glass 组件的属性接口
 * @interface GlassProps
 */
export interface GlassProps {
    className?: string;
    style?: CSSProperties;
    boxClassName?: string;
    boxStyle?: CSSProperties;
    boxInnerClassName?: string;
    boxInnerStyle?: CSSProperties;
    borderWidth?: number | string;
    borderRadius?: number | string;
    autoHeight?: boolean;
    /**
     * 边框基础色，任意合法 CSS 颜色（#fff、rgb()、hsl()、颜色关键字、lab()、var(--x) 等），
     * 透明度由 strongColorAlpha / mediumColorAlpha / lightColorAlpha 控制
     */
    borderColor?: string;
    /** 亮角/强边等使用的透明度，0~1，默认 0.6 */
    strongColorAlpha?: number;
    /** 边「亮」端点使用的透明度，0~1，默认 0.7 */
    mediumColorAlpha?: number;
    /** 暗角/暗边使用的透明度，0~1，默认 0.1 */
    lightColorAlpha?: number;
    /**
     * 四个角的亮/暗控制
     * - 亮(light): borderColor + strongColorAlpha
     * - 暗(dark): borderColor + lightColorAlpha
     */
    corners?: GlassCorners;
    children?: any;
}
