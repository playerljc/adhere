import { CSSProperties, ReactElement, ReactNode, RefObject } from 'react';
/**
 * 面板项目配置接口
 * @interface Item
 * @description 定义魔法面板中每个项目的配置信息
 */
export interface Item {
    /** 项目的唯一标识符 */
    key: string;
    /** 项目的 CSS 类名 */
    className?: string;
    /** 项目的内联样式 */
    style?: CSSProperties;
    /** 项目的渲染函数，接收元素信息参数 */
    children?: (params: ElementInfo) => ReactNode;
}
/**
 * 元素信息接口
 * @interface ElementInfo
 * @description 描述元素的位置和尺寸信息
 */
export interface ElementInfo {
    /** 元素的 X 坐标（像素） */
    x: number;
    /** 元素的 Y 坐标（像素） */
    y: number;
    /** 元素的宽度（像素） */
    width: number;
    /** 元素的高度（像素） */
    height: number;
    /** 元素的额外属性 */
    attrs?: Record<string, string>;
}
/**
 * 元数据接口
 * @interface MetaData
 * @description 包含原始元素信息和尺寸数据
 */
export interface MetaData {
    /** 原始元素信息数组 */
    elementsInfo: ElementInfo[];
    /** 原始宽度 */
    originWidth: number;
    /** 原始高度 */
    originHeight: number;
    /** 裁剪的属性 */
    clip?: Clip;
}
/**
 * 计算数据类型
 * @type ComputeElementsInfoData
 * @description 重新计算后的元素信息数组
 */
export type ComputeElementsInfoData = ElementInfo[];
export type ComputeClipData = Clip;
/**
 * 计算新元素信息的参数接口
 * @interface CalculateElementsParams
 */
export interface CalculateElementsParams {
    elementsInfo: ElementInfo[];
    widthOrigin: number;
    heightOrigin: number;
    widthNew: number;
    heightNew: number;
}
export interface CalculateClipParams {
    clip: Clip;
    widthOrigin: number;
    heightOrigin: number;
    widthNew: number;
    heightNew: number;
}
/**
 * 长度值类型
 * @description 支持各种CSS长度单位，如 '10px', '50%', '1em' 等
 */
export type LengthValue = string | number;
/**
 * inset() 矩形裁剪形状
 * @description 定义矩形内嵌裁剪区域
 */
export interface InsetShape {
    /** 形状类型标识 */
    type: 'inset';
    /** 上边距 */
    top: LengthValue;
    /** 右边距（可选，默认与top相同） */
    right?: LengthValue;
    /** 下边距（可选，默认与top相同） */
    bottom?: LengthValue;
    /** 左边距（可选，默认与right相同） */
    left?: LengthValue;
    /** 圆角半径，使用 border-radius 语法 */
    round?: string;
}
/**
 * circle() 圆形裁剪形状
 * @description 定义圆形裁剪区域
 */
export interface CircleShape {
    /** 形状类型标识 */
    type: 'circle';
    /** 圆的半径，默认为 'closest-side' */
    radius?: LengthValue | 'closest-side' | 'farthest-side';
    /** 圆心位置，例如: 'at 50% 50%', 'at center' */
    position?: string;
}
/**
 * ellipse() 椭圆裁剪形状
 * @description 定义椭圆裁剪区域
 */
export interface EllipseShape {
    /** 形状类型标识 */
    type: 'ellipse';
    /** X轴半径，默认为 'closest-side' */
    radiusX?: LengthValue | 'closest-side' | 'farthest-side';
    /** Y轴半径，默认为 'closest-side' */
    radiusY?: LengthValue | 'closest-side' | 'farthest-side';
    /** 椭圆中心位置 */
    position?: string;
}
/**
 * polygon() 多边形裁剪形状
 * @description 定义多边形裁剪区域
 */
export interface PolygonShape {
    /** 形状类型标识 */
    type: 'polygon';
    /** 填充规则 */
    fillRule?: 'nonzero' | 'evenodd';
    /** 多边形的顶点坐标数组 */
    points: Array<{
        x: LengthValue;
        y: LengthValue;
    }>;
}
/**
 * path() SVG路径裁剪形状
 * @description 使用SVG路径定义裁剪区域
 */
export interface PathShape {
    /** 形状类型标识 */
    type: 'path';
    /** 填充规则 */
    fillRule?: 'nonzero' | 'evenodd';
    /** SVG路径数据 */
    d: string;
}
/**
 * 基础形状联合类型
 * @description 包含所有支持的基础裁剪形状
 */
export type BasicShape = InsetShape | CircleShape | EllipseShape | PolygonShape | PathShape;
/**
 * 几何盒子类型
 * @description 定义裁剪路径相对于哪个盒子模型
 */
export type GeometryBox = 'margin-box' | 'border-box' | 'padding-box' | 'content-box' | 'fill-box' | 'stroke-box' | 'view-box';
/**
 * URL引用裁剪类型
 * @description 引用SVG中定义的裁剪路径
 */
export interface UrlClip {
    /** 类型标识 */
    type: 'url';
    /** SVG裁剪路径的URL引用 */
    url: string;
}
/**
 * 裁剪路径配置类型
 * @description 完整的clip-path属性配置，支持所有CSS规范定义的裁剪方式
 */
export type Clip = {
    type: 'none';
} | {
    type: 'basic-shape';
    shape: BasicShape;
    geometryBox?: GeometryBox;
} | {
    type: 'geometry-box';
    geometryBox: GeometryBox;
} | UrlClip | {
    type: 'basic-shape-and-geometry-box';
    shape: BasicShape;
    geometryBox: GeometryBox;
};
/**
 * 魔法面板组件属性接口
 * @interface MagicPanelProps
 * @description MagicPanel 组件的所有可配置属性
 */
export interface MagicPanelProps {
    /** 容器的 CSS 类名 */
    className?: string;
    /** 容器的内联样式 */
    style?: CSSProperties;
    /** 元数据，包含原始元素信息和尺寸 */
    metaData?: MetaData;
    /** 渲染主体内容的函数，接收元素引用并返回 React 元素 */
    renderBody: (ref: RefObject<HTMLElement | null>) => ReactElement;
    renderClip?: () => ReactElement;
    /** 自定义渲染函数，接收主体元素、新元素数据和项目元素数组 */
    children?: (bodyElement: ReactElement, newElements: ComputeElementsInfoData, items?: ReactElement[]) => ReactNode;
    /** 面板项目配置数组 */
    items?: Item[];
    /** 元素信息变化时的回调函数 */
    onChange?: (e: ComputeElementsInfoData) => void;
}
