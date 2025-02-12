import type { RangePickerFormatValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const RangePickerFormatValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<RangePickerFormatValueHOCProps>;
} = createFactory<RangePickerFormatValueHOCProps>(ValueHOC, {});

RangePickerFormatValueHOC.displayName = 'RangePickerFormatValueHOC';

export default RangePickerFormatValueHOC;
