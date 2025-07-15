import { CSSProperties, NamedExoticComponent, ReactNode } from 'react';
import SplitGroup from './Group';
/**
 * Split组件的类型定义
 * 包含主组件和Group子组件
 */
export type SplitComponent = NamedExoticComponent<SplitProps> & {
    /** SplitGroup子组件 */
    Group: typeof SplitGroup;
};
/**
 * Split组件的基础属性接口
 */
export interface SplitProps {
    /** 自定义CSS类名 */
    className?: string;
    /** 自定义样式对象 */
    style?: CSSProperties;
    /** 分割方向：垂直或水平 */
    direction?: 'vertical' | 'horizontal';
    /** 分割条的大小，可以是数字(像素)或字符串(带单位) */
    size?: string | number;
    /** 水平方向时是否自适应高度 */
    horizontalFit?: boolean;
}
/**
 * SplitGroup组件的属性接口
 * 继承自SplitProps并添加children属性
 */
export interface SplitGroupProps extends SplitProps {
    /** 子元素 */
    children?: ReactNode;
}
/**
 * 媒体查询配置类型
 */
export interface MediaConfig {
    /** 是否使用媒体查询 */
    isUseMedia?: boolean;
    /** 设计稿宽度 */
    designWidth?: number;
}
