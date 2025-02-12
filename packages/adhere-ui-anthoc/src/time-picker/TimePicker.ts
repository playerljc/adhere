import { TimePicker } from 'antd';
import type { TimePickerProps } from 'antd';

import { createFactory } from '../util';

const TimePickerHOC: typeof TimePicker & {
  defaultProps?: Partial<TimePickerProps>;
} = createFactory<TimePickerProps>(TimePicker, {
  allowClear: true,
  placement: 'bottomLeft',
});

TimePickerHOC.displayName = 'TimePicker';

export default TimePickerHOC;
