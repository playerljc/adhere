import type { TimeTimestampValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const TimeTimestampValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<TimeTimestampValueHOCProps>;
  override?: (props: Partial<TimeTimestampValueHOCProps>) => Partial<TimeTimestampValueHOCProps>;
} = createFactory<TimeTimestampValueHOCProps>(ValueHOC, {});

TimeTimestampValueHOC.displayName = 'TimeTimestampValueHOC';

export default TimeTimestampValueHOC;
