import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import type React from 'react';

import { createFactory } from '../util';

const { RangePicker } = DatePicker;

const RangePickerHOC: ((props: RangePickerProps) => React.ReactElement) & {
  defaultProps?: Partial<RangePickerProps>;
  override?: (props: Partial<RangePickerProps>) => Partial<RangePickerProps>;
  displayName?: string;
} = createFactory<RangePickerProps>(RangePicker as any, {
  allowClear: true,
  placement: 'bottomLeft',
});

RangePickerHOC.displayName = 'RangePicker';

export default RangePickerHOC;
