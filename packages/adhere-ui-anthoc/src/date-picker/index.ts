import { DatePicker, DatePickerProps } from 'antd';

import { createFactory } from '../util';

export default createFactory<DatePickerProps>(DatePicker, {
  allowClear: true,
  placement: 'bottomLeft',
});
