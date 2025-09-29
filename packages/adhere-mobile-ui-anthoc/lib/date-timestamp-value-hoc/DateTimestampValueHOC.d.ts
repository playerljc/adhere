import type { DateTimestampValueHOCProps } from '../types';
import ValueHOC from './ValueHOC';
declare const DateTimestampValueHOC: typeof ValueHOC & {
    defaultProps?: Partial<DateTimestampValueHOCProps>;
    override?: (props: Partial<DateTimestampValueHOCProps>) => Partial<DateTimestampValueHOCProps>;
};
export default DateTimestampValueHOC;
