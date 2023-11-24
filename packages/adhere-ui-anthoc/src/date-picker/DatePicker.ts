import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';

import { createFactory } from '../util';

const DatePickerHOC: typeof DatePicker & {
  defaultProps?: Partial<DatePickerProps>;
} = createFactory<DatePickerProps>(DatePicker, {
  allowClear: true,
  placement: 'bottomLeft',
});

DatePickerHOC.displayName = 'DatePicker';

export default DatePickerHOC;
