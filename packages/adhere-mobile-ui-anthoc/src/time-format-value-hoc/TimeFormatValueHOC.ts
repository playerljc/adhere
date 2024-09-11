import type { TimeFormatValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const TimeFormatValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<TimeFormatValueHOCProps>;
} = createFactory<TimeFormatValueHOCProps>(ValueHOC, {});

TimeFormatValueHOC.displayName = 'TimeFormatValueHOC';

export default TimeFormatValueHOC;
