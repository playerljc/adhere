import { CSSProperties, ReactNode } from 'react';

/**
 * 滑动方向类型
 */
export type SlideDirection = 'left' | 'right' | 'top' | 'bottom';

/**
 * 滑动布局基础属性接口
 * @interface SlideLayoutProps
 */
export interface SlideLayoutProps {
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 滑动面板宽度 */
  width?: string | number;
  /** 滑动面板高度 */
  height?: string | number;
  /** 是否显示遮罩层 */
  mask?: boolean;
  /** 层级索引 */
  zIndex?: number | string;
  /** 动画持续时间（毫秒） */
  time?: number;
  /** 是否展开 */
  collapse?: boolean;
  /** 滑动方向 */
  direction?: SlideDirection;
  /** 展开后回调 */
  onAfterShow?: () => void;
  /** 关闭后回调 */
  onAfterClose?: () => void;
  /** 展开前回调 */
  onBeforeShow?: () => void;
  /** 关闭前回调 */
  onBeforeClose?: () => void;
  /** 子元素 */
  children?: ReactNode;
}

/**
 * 覆盖层属性接口
 * @interface OverlayProps
 */
export interface OverlayProps extends SlideLayoutProps {
  /** 滑动方向，覆盖层支持四个方向 */
  direction?: SlideDirection;
}

/**
 * 滑动布局句柄接口
 */
export interface SlideLayoutHandle {
  /** 获取DOM元素 */
  getEl: () => HTMLElement | null;
}

/**
 * 推送布局属性接口
 * @interface PushProps
 */
export interface PushProps extends SlideLayoutProps {
  /** 主容器CSS类名 */
  masterClassName?: string;
  /** 主容器样式 */
  masterStyle?: CSSProperties;
  /** 从容器CSS类名 */
  slaveClassName?: string;
  /** 从容器样式 */
  slaveStyle?: CSSProperties;
  /** 滑动方向，推送布局只支持左右方向 */
  direction?: 'left' | 'right';
  /** 滑动面板内容 */
  slide?: ReactNode;
  /** 主内容 */
  master?: ReactNode;
}

/**
 * 揭示布局属性接口
 * @interface RevealProps
 */
export interface RevealProps extends PushProps {}

/**
 * 位置配置接口
 */
export interface PositionConfig {
  /** 初始化位置配置 */
  init: {
    top?: () => void;
    left?: () => void;
    bottom?: () => void;
    right?: () => void;
  };
  /** 显示位置配置 */
  show: {
    top?: (time?: number | string) => void;
    left?: (time?: number | string) => void;
    bottom?: (time?: number | string) => void;
    right?: (time?: number | string) => void;
  };
  /** 关闭位置配置 */
  close: {
    top?: (time?: number | string) => void;
    left?: (time?: number | string) => void;
    bottom?: (time?: number | string) => void;
    right?: (time?: number | string) => void;
  };
}

/**
 * 滑动动画参数接口
 */
export interface SliderParams {
  /** 目标元素 */
  el: HTMLElement;
  /** X轴位移 */
  x: string;
  /** Y轴位移 */
  y: string;
  /** Z轴位移 */
  z: string;
  /** 动画时间 */
  time?: string | number;
  /** 动画完成回调 */
  callback?: () => void;
}
