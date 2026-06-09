import { TimePicker } from 'antd';
import type { TimePickerProps } from 'antd';

import '../util/setupDayjs';
import { createFactory } from '../util';

const TimePickerHOC: typeof TimePicker & {
  defaultProps?: Partial<TimePickerProps>;
  override?: (props: Partial<TimePickerProps>) => Partial<TimePickerProps>;
} = createFactory<TimePickerProps>(TimePicker, {
  allowClear: true,
  placement: 'bottomLeft',
});

TimePickerHOC.displayName = 'TimePicker';

export default TimePickerHOC;
