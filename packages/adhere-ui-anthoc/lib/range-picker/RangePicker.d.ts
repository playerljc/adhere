/// <reference types="react" />
import { RangePickerProps } from 'antd/es/date-picker';
declare const RangePicker: import("react").ForwardRefExoticComponent<Omit<import("rc-picker").RangePickerProps<import("dayjs").Dayjs>, "locale" | "generateConfig" | "hideHeader"> & {
    locale?: import("antd/es/date-picker/generatePicker").PickerLocale | undefined;
    size?: import("antd/es/button").ButtonSize;
    placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | undefined;
    bordered?: boolean | undefined;
    status?: "" | "warning" | "error" | undefined;
    variant?: "outlined" | "borderless" | "filled" | undefined;
    dropdownClassName?: string | undefined;
    popupClassName?: string | undefined;
    rootClassName?: string | undefined;
    popupStyle?: import("react").CSSProperties | undefined;
} & import("react").RefAttributes<import("rc-picker").PickerRef>>;
declare const RangePickerHOC: typeof RangePicker & {
    defaultProps?: Partial<RangePickerProps>;
};
export default RangePickerHOC;
