import type { CSSProperties } from 'react';

/**
 * SliderScaleProps
 * @interface SliderScaleProps
 */
export interface SliderScaleProps {
  className?: string;
  style?: CSSProperties;
  // 最小值
  min?: number;
  // 最大值
  max?: number;
  // 步进
  step?: number;
  // 当前值
  value?: number;
  // 刻度的间隔
  interval?: number;
  onChange?: (value?: any) => void;
}
