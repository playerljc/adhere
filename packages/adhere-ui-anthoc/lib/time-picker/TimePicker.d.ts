import { TimePicker } from 'antd';
import type { TimePickerProps } from 'antd';
import '../util/setupDayjs';
declare const TimePickerHOC: typeof TimePicker & {
    defaultProps?: Partial<TimePickerProps>;
    override?: (props: Partial<TimePickerProps>) => Partial<TimePickerProps>;
};
export default TimePickerHOC;
