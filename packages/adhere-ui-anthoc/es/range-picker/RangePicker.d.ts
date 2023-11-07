import { RangePickerProps } from 'antd/es/date-picker';
declare const RangePicker: import("antd/es/date-picker/generatePicker/interface").PickerComponentClass<import("antd/es/date-picker/generatePicker").RangePickerProps<import("dayjs").Dayjs> & {
    dropdownClassName?: string | undefined;
    popupClassName?: string | undefined;
    rootClassName?: string | undefined;
}, unknown>;
declare const RangePickerHOC: typeof RangePicker & {
    defaultProps?: Partial<RangePickerProps>;
};
export default RangePickerHOC;
