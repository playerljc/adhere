import type { CalendarTimestampValueHOCProps } from '../types';
import ValueHOC from './ValueHOC';
declare const CalendarTimestampValueHOC: typeof ValueHOC & {
    defaultProps?: Partial<CalendarTimestampValueHOCProps>;
    override?: (props: Partial<CalendarTimestampValueHOCProps>) => Partial<CalendarTimestampValueHOCProps>;
};
export default CalendarTimestampValueHOC;
