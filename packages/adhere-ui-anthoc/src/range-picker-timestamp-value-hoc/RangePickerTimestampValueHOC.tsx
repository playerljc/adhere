import type { RangePickerTimestampValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const RangePickerTimestampValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<RangePickerTimestampValueHOCProps>;
} = createFactory<RangePickerTimestampValueHOCProps>(ValueHOC, {});

RangePickerTimestampValueHOC.displayName = 'RangePickerTimestampValueHOC';

export default RangePickerTimestampValueHOC;
