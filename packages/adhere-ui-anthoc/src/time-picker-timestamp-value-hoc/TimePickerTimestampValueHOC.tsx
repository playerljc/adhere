import type { TimePickerTimestampValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const TimePickerTimestampValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<TimePickerTimestampValueHOCProps>;
} = createFactory<TimePickerTimestampValueHOCProps>(ValueHOC, {});

TimePickerTimestampValueHOC.displayName = 'TimePickerTimestampValueHOC';

export default TimePickerTimestampValueHOC;
