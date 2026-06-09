import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import '../util/setupDayjs';
declare const DatePickerHOC: typeof DatePicker & {
    defaultProps?: Partial<DatePickerProps>;
    override?: (props: Partial<DatePickerProps>) => Partial<DatePickerProps>;
};
export default DatePickerHOC;
