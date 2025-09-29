import type { TimeFormatValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const TimeFormatValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<TimeFormatValueHOCProps>;
  override?: (props: Partial<TimeFormatValueHOCProps>) => Partial<TimeFormatValueHOCProps>;
} = createFactory<TimeFormatValueHOCProps>(ValueHOC, {});

TimeFormatValueHOC.displayName = 'TimeFormatValueHOC';

export default TimeFormatValueHOC;
