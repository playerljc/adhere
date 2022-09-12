import { CSSProperties } from 'react';

/**
 * FontSizeSettingProps
 * @interface FontSizeSettingProps
 */
export interface FontSizeSettingProps {
  className?: string;
  style?: CSSProperties;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange?: (value?: number) => void;
}
