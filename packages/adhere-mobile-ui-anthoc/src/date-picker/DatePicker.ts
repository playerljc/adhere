import { DatePicker } from 'antd-mobile';
import type { DatePickerProps } from 'antd-mobile';

import { createFactory } from '../util';

const DatePickerHOC: typeof DatePicker & {
  defaultProps?: Partial<DatePickerProps>;
} = createFactory<DatePickerProps>(DatePicker, {});

DatePickerHOC.displayName = 'DatePicker';

export default DatePickerHOC;
