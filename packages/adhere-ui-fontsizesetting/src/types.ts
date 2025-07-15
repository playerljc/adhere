import { CSSProperties } from 'react';
import { SliderSingleProps } from 'antd';

/**
 * 字体大小设置组件的属性接口
 * @interface FontSizeSettingProps
 * @extends {Omit<SliderSingleProps, 'onChange'>} 继承Antd Slider组件的属性，但排除onChange
 */
export interface FontSizeSettingProps extends Omit<SliderSingleProps, 'onChange'> {
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义内联样式 */
  style?: CSSProperties;
  /** 字体大小最小值，默认为0 */
  min?: number;
  /** 字体大小最大值，默认为100 */
  max?: number;
  /** 滑动步长，默认为1 */
  step?: number;
  /** 当前字体大小值 */
  value?: number;
  /** 字体大小变化时的回调函数 */
  onChange?: (value: number) => void;
}

/**
 * 字体大小预设选项
 */
export type FontSizePreset = 'small' | 'medium' | 'large' | 'extra_large';

/**
 * 字体大小预设配置
 */
export interface FontSizePresetConfig {
  /** 预设标签 */
  label: string;
  /** 预设值 */
  value: number;
}
