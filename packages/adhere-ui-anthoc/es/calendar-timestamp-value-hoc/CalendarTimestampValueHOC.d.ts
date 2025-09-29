import type { CalendarFormatValueHOCProps } from '../types';
import ValueHOC from './ValueHOC';
declare const CalendarFormatValueHOC: typeof ValueHOC & {
    defaultProps?: Partial<CalendarFormatValueHOCProps>;
    override?: (props: Partial<CalendarFormatValueHOCProps>) => Partial<CalendarFormatValueHOCProps>;
};
export default CalendarFormatValueHOC;
