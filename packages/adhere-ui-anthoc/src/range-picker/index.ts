import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';

import { createFactory } from '../util';

const { RangePicker } = DatePicker;

export default createFactory<RangePickerProps>(RangePicker, {
  allowClear: true,
  placement: 'bottomLeft',
});
