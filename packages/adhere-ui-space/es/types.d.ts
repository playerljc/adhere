import type { CSSProperties, FC, NamedExoticComponent, ReactNode } from 'react';
/**
 * Space 组件属性接口
 * @interface SpaceProps
 */
export interface SpaceProps {
    /** 自定义 CSS 类名 */
    className?: string;
    /** 自定义内联样式 */
    style?: CSSProperties;
    /** 间距方向：垂直或水平 */
    direction?: 'vertical' | 'horizontal';
    /** 间距大小，可以是数字（像素）或字符串（CSS 值） */
    size?: string | number;
    /** 水平方向时是否适应容器高度 */
    horizontalFit?: boolean;
}
/**
 * SpaceGroup 组件属性接口
 * @interface SpaceGroupProps
 */
export interface SpaceGroupProps extends SpaceProps {
    /** 子元素 */
    children?: ReactNode;
}
/**
 * Space 组件类型定义
 * 包含 Space 组件本身和 Group 子组件
 */
export type SpaceComponent = NamedExoticComponent<SpaceProps> & {
    /** SpaceGroup 子组件 */
    Group: FC<SpaceGroupProps>;
};
/**
 * 媒体查询配置类型
 */
export type MediaConfig = {
    /** 是否使用媒体查询 */
    isUseMedia?: boolean;
    /** 设计稿宽度 */
    designWidth?: number;
};
