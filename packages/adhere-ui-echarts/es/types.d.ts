/**
 * 区域样式配置接口
 * @description 用于配置折线图区域填充的样式
 */
export interface AreaStyle {
    /** 填充颜色 */
    color: string;
    /** 区域填充的起始位置 */
    origin: 'auto' | 'start' | 'end' | number;
    /** 阴影模糊半径 */
    shadowBlur: number;
    /** 阴影颜色 */
    shadowColor: string;
    /** 阴影水平偏移 */
    shadowOffsetX: number;
    /** 阴影垂直偏移 */
    shadowOffsetY: number;
    /** 透明度 */
    opacity: number;
}
/**
 * 半径类型
 * @description 用于饼图、圆环图等图表的半径配置
 */
export type Radius = number | string | Array<number | string>;
/**
 * 玫瑰图类型
 * @description 用于配置南丁格尔玫瑰图的显示方式
 */
export type RoseType = boolean | 'area' | 'radius';
/**
 * 渐变色配置接口
 * @description 用于配置渐变色效果
 */
export interface GradientColorConfig {
    /** 渐变开始点的 x 坐标 */
    x: number;
    /** 渐变开始点的 y 坐标 */
    y: number;
    /** 渐变结束点的 x 坐标 */
    x2: number;
    /** 渐变结束点的 y 坐标 */
    y2: number;
    /** 颜色停止点数组 */
    colorStops: Array<{
        /** 停止点位置 (0-1) */
        offset: number;
        /** 颜色值 */
        color: string;
    }>;
    /** 是否全局渐变 */
    global: boolean;
}
/**
 * 纯色配置接口
 * @description 用于配置纯色值
 */
export interface SolidColorConfig {
    [key: string]: string;
}
/**
 * 颜色配置联合类型
 * @description 包含纯色和渐变色的完整颜色配置
 */
export type ColorConfig = {
    [key: string]: string | GradientColorConfig;
};
/**
 * 图表基础配置接口
 * @description 所有图表的基础配置选项
 */
export interface BaseChartOption {
    /** 网格配置 */
    grid?: {
        left?: string | number;
        right?: string | number;
        top?: string | number;
        bottom?: string | number;
        containLabel?: boolean;
    };
    /** 坐标轴配置 */
    xAxis?: any;
    yAxis?: any;
    /** 系列数据 */
    series?: any[];
    /** 其他配置项 */
    [key: string]: any;
}
/**
 * 图表系列配置接口
 * @description 图表系列的基础配置
 */
export interface SeriesOption {
    /** 系列类型 */
    type: string;
    /** 系列名称 */
    name?: string;
    /** 系列数据 */
    data?: any[];
    /** 其他配置项 */
    [key: string]: any;
}
