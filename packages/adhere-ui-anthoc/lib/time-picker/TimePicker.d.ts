import { TimePicker } from 'antd';
import type { TimePickerProps } from 'antd';
declare const TimePickerHOC: typeof TimePicker & {
    defaultProps?: Partial<TimePickerProps>;
    override?: (props: Partial<TimePickerProps>) => Partial<TimePickerProps>;
};
export default TimePickerHOC;
