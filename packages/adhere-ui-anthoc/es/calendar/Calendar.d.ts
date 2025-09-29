import { Calendar } from 'antd';
import type { CalendarProps } from 'antd';
declare const CalendarHOC: typeof Calendar & {
    defaultProps?: Partial<CalendarProps<any>>;
    override?: (props: Partial<CalendarProps<any>>) => Partial<CalendarProps<any>>;
};
export default CalendarHOC;
