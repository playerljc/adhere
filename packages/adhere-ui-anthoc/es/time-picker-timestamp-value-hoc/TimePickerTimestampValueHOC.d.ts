import type { TimePickerTimestampValueHOCProps } from '../types';
import ValueHOC from './ValueHOC';
declare const TimePickerTimestampValueHOC: typeof ValueHOC & {
    defaultProps?: Partial<TimePickerTimestampValueHOCProps>;
    override?: (props: Partial<TimePickerTimestampValueHOCProps>) => Partial<TimePickerTimestampValueHOCProps>;
};
export default TimePickerTimestampValueHOC;
