import type { RangePickerFormatValueHOCProps } from '../types';
import ValueHOC from './ValueHOC';
declare const RangePickerFormatValueHOC: typeof ValueHOC & {
    defaultProps?: Partial<RangePickerFormatValueHOCProps>;
    override?: (props: Partial<RangePickerFormatValueHOCProps>) => Partial<RangePickerFormatValueHOCProps>;
};
export default RangePickerFormatValueHOC;
