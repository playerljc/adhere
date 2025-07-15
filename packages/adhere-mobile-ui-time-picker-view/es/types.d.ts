import type { PickerViewProps } from 'antd-mobile';
import type { CSSProperties } from 'react';
/**
 * 时间格式类型
 * - HH:mm:ss: 时:分:秒
 * - HH:mm: 时:分
 * - HH: 时
 * - mm:ss: 分:秒
 * - ss: 秒
 */
export type Format = 'HH:mm:ss' | 'HH:mm' | 'HH' | 'mm:ss' | 'ss' | undefined;
/**
 * 时间选择器的值类型
 */
export type TimePickerValue = Date;
/**
 * TimePickerView组件的属性接口
 * 继承自PickerViewProps，但重写了部分属性以适配时间选择器的需求
 */
export interface TimePickerViewProps extends Omit<PickerViewProps, 'columns' | 'value' | 'defaultValue' | 'onChange'> {
    /** 自定义CSS类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 默认选中的时间值 */
    defaultValue?: TimePickerValue;
    /** 当前选中的时间值 */
    value?: TimePickerValue;
    /** 时间值变化时的回调函数 */
    onChange?: (value: TimePickerValue) => void;
    /** 时间格式，默认为 'HH:mm:ss' */
    format?: Format;
}
