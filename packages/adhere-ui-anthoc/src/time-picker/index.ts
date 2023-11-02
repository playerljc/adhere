import { TimePicker, TimePickerProps } from 'antd';

import { createFactory } from '../util';

export default createFactory<TimePickerProps>(TimePicker, {
  allowClear: true,
  placement: 'bottomLeft',
});
