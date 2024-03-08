import type { DateFormatValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const DateFormatValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<DateFormatValueHOCProps>;
} = createFactory<DateFormatValueHOCProps>(ValueHOC, {});

DateFormatValueHOC.displayName = 'DateFormatValueHOC';

export default DateFormatValueHOC;
