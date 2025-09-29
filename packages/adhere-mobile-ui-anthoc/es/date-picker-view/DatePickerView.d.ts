import { DatePickerView } from 'antd-mobile';
import type { DatePickerViewProps } from 'antd-mobile';
declare const DatePickerViewHOC: typeof DatePickerView & {
    defaultProps?: Partial<DatePickerViewProps>;
    override?: (props: Partial<DatePickerViewProps>) => Partial<DatePickerViewProps>;
};
export default DatePickerViewHOC;
