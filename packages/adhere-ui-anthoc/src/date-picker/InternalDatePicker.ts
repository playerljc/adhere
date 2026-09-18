import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';

import '../util/setupDayjs';
import { createFactory } from '../util';

const InternalDatePicker: typeof DatePicker & {
  defaultProps?: Partial<DatePickerProps>;
  override?: (props: Partial<DatePickerProps>) => Partial<DatePickerProps>;
} = createFactory<DatePickerProps>(DatePicker, {
  allowClear: true,
  placement: 'bottomLeft',
});

InternalDatePicker.displayName = 'InternalDatePicker';

export default InternalDatePicker;
