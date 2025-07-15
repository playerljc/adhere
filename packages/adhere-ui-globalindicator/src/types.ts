/**
 * 指示器尺寸类型
 */
export type Size = 'default' | 'small' | 'large';

/**
 * 指示器配置选项
 */
export interface GlobalIndicatorOptions {
  /** 父容器元素，默认为 document.body */
  parent?: HTMLElement;
  /** 显示的文本内容 */
  text?: string;
  /** z-index 层级，默认为最大层级 */
  zIndex?: number;
  /** 指示器尺寸 */
  size?: Size;
}

/**
 * 指示器实例配置
 */
export interface SpinnerConfig {
  /** 线条数量 */
  lines: number;
  /** 每条线的长度 */
  length: number;
  /** 线条粗细 */
  width: number;
  /** 内圆半径 */
  radius: number;
  /** 整体缩放比例 */
  scale: number;
  /** 圆角程度 (0..1) */
  corners: number;
  /** 每秒旋转圈数 */
  speed: number;
  /** 旋转偏移量 */
  rotate: number;
  /** CSS 动画名称 */
  animation: string;
  /** 旋转方向: 1 顺时针, -1 逆时针 */
  direction: number;
  /** 颜色 */
  color: string;
  /** 淡出颜色 */
  fadeColor: string;
  /** 顶部位置 */
  top: string;
  /** 左侧位置 */
  left: string;
  /** 阴影效果 */
  shadow: string;
  /** z-index */
  zIndex: number;
  /** CSS 类名 */
  className: string;
  /** 定位方式 */
  position: string;
}

/**
 * 全局指示器接口
 */
export interface GlobalIndicator {
  /**
   * 显示全局指示器
   * @param options - 配置选项
   * @returns 指示器 DOM 元素
   */
  show(options?: GlobalIndicatorOptions): HTMLElement;
  
  /**
   * 显示全局指示器（兼容旧版本）
   * @param parent - 父容器元素
   * @param text - 显示的文本
   * @param zIndex - z-index 层级
   * @param size - 指示器尺寸
   * @returns 指示器 DOM 元素
   */
  show(parent?: HTMLElement, text?: string, zIndex?: number, size?: Size): HTMLElement;
  
  /**
   * 隐藏指定的指示器
   * @param indicatorDom - 指示器 DOM 元素
   */
  hide(indicatorDom: HTMLElement): void;
  
  /**
   * 隐藏所有指示器
   */
  hideAll(): void;
}
