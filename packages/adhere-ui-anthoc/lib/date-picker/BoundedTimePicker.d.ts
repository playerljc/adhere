import type { DatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';
import React from 'react';
/**
 * BoundedTimePicker Props
 */
export interface BoundedTimePickerProps extends Omit<DatePickerProps, 'disabledDate'> {
    /** 边界模式：before-只能选基准时间之前，after-只能选基准时间之后 */
    boundMode?: 'before' | 'after';
    /** 基准时间值，默认为当前时间 */
    baseValue?: Dayjs;
    /** 是否包含基准时间本身，默认 true */
    includeBaseValue?: boolean;
}
/**
 * BoundedTimePicker 组件
 * @description 限定时间范围的日期选择器，可以限制只能选择基准时间之前或之后的日期
 */
declare const BoundedTimePicker: React.FC<BoundedTimePickerProps>;
export default BoundedTimePicker;
