import type { DatePickerTimestampValueHOCProps } from '../types';
import ValueHOC from './ValueHOC';
declare const DatePickerTimestampValueHOC: typeof ValueHOC & {
    defaultProps?: Partial<DatePickerTimestampValueHOCProps>;
    override?: (props: Partial<DatePickerTimestampValueHOCProps>) => Partial<DatePickerTimestampValueHOCProps>;
};
export default DatePickerTimestampValueHOC;
