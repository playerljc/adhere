import type { DatePickerFormatValueHOCProps } from '../types';
import { createFactory } from '../util';
import ValueHOC from './ValueHOC';

const DatePickerFormatValueHOC: typeof ValueHOC & {
  defaultProps?: Partial<DatePickerFormatValueHOCProps>;
  override?: (
    props: Partial<DatePickerFormatValueHOCProps>,
  ) => Partial<DatePickerFormatValueHOCProps>;
} = createFactory<DatePickerFormatValueHOCProps>(ValueHOC, {});

DatePickerFormatValueHOC.displayName = 'DatePickerFormatValueHOC';

export default DatePickerFormatValueHOC;
