/**
 * Spin组件的尺寸类型
 */
export type SpinSize = 'small' | 'default' | 'large';

/**
 * Spin组件的属性接口
 * @interface SpinProps
 * @description 定义Spin组件的所有可配置属性
 */
export interface SpinProps {
  /**
   * 是否显示加载状态
   * @default false
   */
  spinning?: boolean;
  
  /**
   * 加载提示文本
   * @default ''
   */
  text?: string;
  
  /**
   * 组件的z-index层级
   * @default Resource.Dict.value.ResourceNormalMaxZIndex?.value
   */
  zIndex?: string | number;
  
  /**
   * 组件尺寸
   * @default 'default'
   */
  size?: SpinSize;
}

/**
 * Spinner配置选项接口
 * @interface SpinnerOptions
 * @description 定义spin.js库的配置选项
 */
export interface SpinnerOptions {
  lines: number;
  length: number;
  width: number;
  radius: number;
  scale: number;
  corners: number;
  speed: number;
  rotate: number;
  animation: string;
  direction: number;
  color: string;
  fadeColor: string;
  top: string;
  left: string;
  shadow: string;
  zIndex: string | number;
  className: string;
  position: string;
}

/**
 * 尺寸到缩放比例的映射
 */
export type ScaleMap = Map<SpinSize, number>;
