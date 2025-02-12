import { TimePicker } from 'antd';
import type { TimePickerProps } from 'antd';
declare const TimePickerHOC: typeof TimePicker & {
    defaultProps?: Partial<TimePickerProps>;
};
export default TimePickerHOC;
