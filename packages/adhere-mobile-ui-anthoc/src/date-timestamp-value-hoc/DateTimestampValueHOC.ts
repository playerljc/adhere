import type { DateTimestampValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const DateTimestampValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<DateTimestampValueHOCProps>;
} = createFactory<DateTimestampValueHOCProps>(ValueHOC, {});

DateTimestampValueHOC.displayName = 'DateTimestampValueHOC';

export default DateTimestampValueHOC;
