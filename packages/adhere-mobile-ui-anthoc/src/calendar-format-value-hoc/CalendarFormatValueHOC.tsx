import type { CalendarFormatValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const CalendarFormatValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<CalendarFormatValueHOCProps>;
} = createFactory<CalendarFormatValueHOCProps>(ValueHOC, {});

CalendarFormatValueHOC.displayName = 'CalendarFormatValueHOC';

export default CalendarFormatValueHOC;
