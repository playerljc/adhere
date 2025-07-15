import { CSSProperties, MutableRefObject, ReactElement, ReactNode } from 'react';
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
}
/**
 * 计算数据类型
 * @type ComputeData
 * @description 重新计算后的元素信息数组
 */
export type ComputeData = ElementInfo[];
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
    renderBody: (ref: MutableRefObject<HTMLElement | null>) => ReactElement;
    /** 自定义渲染函数，接收主体元素、新元素数据和项目元素数组 */
    children?: (bodyElement: ReactElement, newElements: ComputeData, items?: ReactElement[]) => ReactNode;
    /** 面板项目配置数组 */
    items?: Item[];
    /** 元素信息变化时的回调函数 */
    onChange?: (e: ComputeData) => void;
}
