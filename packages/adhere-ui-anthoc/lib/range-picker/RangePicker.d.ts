import { RangePickerProps } from 'antd/es/date-picker';
declare const RangePicker: import("react").ForwardRefExoticComponent<Omit<import("rc-picker").RangePickerProps<import("dayjs").Dayjs>, "locale" | "generateConfig" | "hideHeader"> & {
    locale?: import("antd/es/date-picker/generatePicker").PickerLocale;
    size?: import("antd/es/button").ButtonSize;
    placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    bordered?: boolean;
    status?: import("antd/es/_util/statusUtils").InputStatus;
    variant?: import("antd/es/config-provider").Variant;
    dropdownClassName?: string;
    popupClassName?: string;
    rootClassName?: string;
    popupStyle?: React.CSSProperties;
} & import("react").RefAttributes<import("rc-picker").PickerRef>>;
declare const RangePickerHOC: typeof RangePicker & {
    defaultProps?: Partial<RangePickerProps>;
};
export default RangePickerHOC;
