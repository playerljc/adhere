import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';

import { createFactory } from '../util';

const { RangePicker } = DatePicker;

const RangePickerHOC: typeof RangePicker & {
  defaultProps?: Partial<RangePickerProps>;
} = createFactory<RangePickerProps>(RangePicker, {
  allowClear: true,
  placement: 'bottomLeft',
});

RangePickerHOC.displayName = 'RangePicker';

export default RangePickerHOC;
