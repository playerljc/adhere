import type { TimePickerFormatValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const TimePickerFormatValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<TimePickerFormatValueHOCProps>;
} = createFactory<TimePickerFormatValueHOCProps>(ValueHOC, {});

TimePickerFormatValueHOC.displayName = 'TimePickerFormatValueHOC';

export default TimePickerFormatValueHOC;
