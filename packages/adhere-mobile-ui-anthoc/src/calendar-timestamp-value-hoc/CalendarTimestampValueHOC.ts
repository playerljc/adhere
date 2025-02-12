import type { CalendarTimestampValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const CalendarTimestampValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<CalendarTimestampValueHOCProps>;
} = createFactory<CalendarTimestampValueHOCProps>(ValueHOC, {});

CalendarTimestampValueHOC.displayName = 'CalendarTimestampValueHOC';

export default CalendarTimestampValueHOC;
