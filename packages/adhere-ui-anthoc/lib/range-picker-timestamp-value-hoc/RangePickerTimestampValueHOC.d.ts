import type { RangePickerTimestampValueHOCProps } from '../types';
import ValueHOC from './ValueHOC';
declare const RangePickerTimestampValueHOC: typeof ValueHOC & {
    defaultProps?: Partial<RangePickerTimestampValueHOCProps>;
    override?: (props: Partial<RangePickerTimestampValueHOCProps>) => Partial<RangePickerTimestampValueHOCProps>;
};
export default RangePickerTimestampValueHOC;
