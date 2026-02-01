import type { DatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React from 'react';

import DatePicker from './DatePicker';

/**
 * BirthdayPicker Props
 */
export type BirthdayPickerProps = Omit<DatePickerProps, 'disabledDate'>;

/**
 * BirthdayPicker 组件
 * @description 生日选择器，禁用今天及今天之后的日期，只能选择过去的日期
 */
const BirthdayPicker: React.FC<BirthdayPickerProps> = (props) => (
  <DatePicker
    disabledDate={(current) =>
      !!current && (current.isSame(dayjs(), 'day') || current.isAfter(dayjs(), 'day'))
    }
    {...props}
  />
);

export default BirthdayPicker;
