import type { DateFormatValueHOCProps } from '../types';
import ValueHOC from './ValueHOC';
declare const DateFormatValueHOC: typeof ValueHOC & {
    defaultProps?: Partial<DateFormatValueHOCProps>;
    override?: (props: Partial<DateFormatValueHOCProps>) => Partial<DateFormatValueHOCProps>;
};
export default DateFormatValueHOC;
