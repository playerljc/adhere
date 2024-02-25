import type { PickerViewProps } from 'antd-mobile';
import type { CSSProperties } from 'react';

export type Format = 'HH:mm:ss' | 'HH:mm' | 'HH' | 'mm:ss' | 'ss' | undefined;

export type TimePickerValue = Date;

export type TimePickerViewProps = Omit<
  PickerViewProps,
  'columns' | 'value' | 'defaultValue' | 'onChange'
> & {
  className?: string;
  style?: CSSProperties;
  defaultValue?: TimePickerValue;
  value?: TimePickerValue;
  onChange?: (value: TimePickerValue) => void;
  format?: Format;
};
