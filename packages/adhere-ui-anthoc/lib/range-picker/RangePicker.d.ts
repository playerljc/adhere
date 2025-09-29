import { RangePickerProps } from 'antd/es/date-picker';
declare const RangePicker: import("react").ForwardRefExoticComponent<Omit<import("rc-picker").RangePickerProps<import("dayjs").Dayjs>, "styles" | "classNames" | "locale" | "generateConfig" | "hideHeader"> & {
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
    styles?: import("antd/es/date-picker/generatePicker/interface").PickerStyles;
    classNames?: import("antd/es/date-picker/generatePicker/interface").PickerClassNames;
} & import("react").RefAttributes<import("rc-picker").PickerRef>>;
declare const RangePickerHOC: typeof RangePicker & {
    defaultProps?: Partial<RangePickerProps>;
    override?: (props: Partial<RangePickerProps>) => Partial<RangePickerProps>;
};
export default RangePickerHOC;
