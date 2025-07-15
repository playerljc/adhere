import type { CSSProperties, ReactElement } from 'react';

/**
 * 滑块刻度组件属性接口
 * @interface SliderScaleProps
 */
export interface SliderScaleProps {
  /** 自定义 CSS 类名 */
  className?: string;
  /** 自定义样式对象 */
  style?: CSSProperties;
  /** 最小值，默认为 0 */
  min?: number;
  /** 最大值，默认为 100 */
  max?: number;
  /** 步进值，默认为 1 */
  step?: number;
  /** 当前值，默认为 0 */
  value?: number;
  /** 刻度的间隔，默认为 5 */
  interval?: number;
  /** 值变化时的回调函数 */
  onChange?: (value: number) => void;
}

/**
 * 刻度项渲染结果类型
 */
export type ScaleItemResult = ReactElement | null;
