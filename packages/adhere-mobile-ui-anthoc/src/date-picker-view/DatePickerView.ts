import { DatePickerView } from 'antd-mobile';
import type { DatePickerViewProps } from 'antd-mobile';

import { createFactory } from '../util';

const DatePickerViewHOC: typeof DatePickerView & {
  defaultProps?: Partial<DatePickerViewProps>;
  override?: (props: Partial<DatePickerViewProps>) => Partial<DatePickerViewProps>;
} = createFactory<DatePickerViewProps>(DatePickerView, {});

DatePickerViewHOC.displayName = 'DatePickerView';

export default DatePickerViewHOC;
