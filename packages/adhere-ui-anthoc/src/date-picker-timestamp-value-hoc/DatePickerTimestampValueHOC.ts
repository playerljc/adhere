import type { DatePickerTimestampValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const DatePickerTimestampValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<DatePickerTimestampValueHOCProps>;
} = createFactory<DatePickerTimestampValueHOCProps>(ValueHOC, {});

DatePickerTimestampValueHOC.displayName = 'DatePickerTimestampValueHOC';

export default DatePickerTimestampValueHOC;
