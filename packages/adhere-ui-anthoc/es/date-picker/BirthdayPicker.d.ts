import type { DatePickerProps } from 'antd';
import React from 'react';
/**
 * BirthdayPicker Props
 */
export type BirthdayPickerProps = Omit<DatePickerProps, 'disabledDate'>;
/**
 * BirthdayPicker 组件
 * @description 生日选择器，禁用今天及今天之后的日期，只能选择过去的日期
 */
declare const BirthdayPicker: React.FC<BirthdayPickerProps>;
export default BirthdayPicker;
