import type { TimePickerFormatValueHOCProps } from '../types';
import ValueHOC from './ValueHOC';
declare const TimePickerFormatValueHOC: typeof ValueHOC & {
    defaultProps?: Partial<TimePickerFormatValueHOCProps>;
    override?: (props: Partial<TimePickerFormatValueHOCProps>) => Partial<TimePickerFormatValueHOCProps>;
};
export default TimePickerFormatValueHOC;
