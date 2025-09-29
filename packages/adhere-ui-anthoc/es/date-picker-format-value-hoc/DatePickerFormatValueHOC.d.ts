import type { DatePickerFormatValueHOCProps } from '../types';
import ValueHOC from './ValueHOC';
declare const DatePickerFormatValueHOC: typeof ValueHOC & {
    defaultProps?: Partial<DatePickerFormatValueHOCProps>;
    override?: (props: Partial<DatePickerFormatValueHOCProps>) => Partial<DatePickerFormatValueHOCProps>;
};
export default DatePickerFormatValueHOC;
