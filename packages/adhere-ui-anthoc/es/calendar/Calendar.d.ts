import { Calendar } from 'antd';
import type { CalendarProps } from 'antd';
declare const CalendarHOC: typeof Calendar & {
    defaultProps?: Partial<CalendarProps<any>>;
};
export default CalendarHOC;
