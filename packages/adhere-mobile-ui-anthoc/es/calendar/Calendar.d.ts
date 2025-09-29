import { Calendar } from 'antd-mobile';
import type { CalendarProps } from 'antd-mobile';
declare const CalendarHOC: typeof Calendar & {
    defaultProps?: Partial<CalendarProps>;
    override?: (props: Partial<CalendarProps>) => Partial<CalendarProps>;
};
export default CalendarHOC;
