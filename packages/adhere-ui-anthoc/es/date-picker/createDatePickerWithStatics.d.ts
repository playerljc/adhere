import BirthdayPicker from './BirthdayPicker';
import BoundedTimePicker from './BoundedTimePicker';
import { DateFieldDependencyProvider } from './dependency';
export declare function createDatePickerWithStatics(): (<ValueType = import("dayjs").Dayjs, IsMultiple extends boolean = false>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<import("dayjs").Dayjs, import("antd/es/date-picker/generatePicker").PickerProps<import("dayjs").Dayjs>, ValueType, IsMultiple>) => React.ReactElement) & {
    displayName?: string;
} & {
    displayName?: string;
    WeekPicker: (<ValueType = import("dayjs").Dayjs, IsMultiple extends boolean = false>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<import("dayjs").Dayjs, Omit<import("antd/es/date-picker/generatePicker").PickerProps<import("dayjs").Dayjs>, "picker">, ValueType, IsMultiple>) => React.ReactElement) & {
        displayName?: string;
    };
    MonthPicker: (<ValueType = import("dayjs").Dayjs, IsMultiple extends boolean = false>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<import("dayjs").Dayjs, Omit<import("antd/es/date-picker/generatePicker").PickerProps<import("dayjs").Dayjs>, "picker">, ValueType, IsMultiple>) => React.ReactElement) & {
        displayName?: string;
    };
    YearPicker: (<ValueType = import("dayjs").Dayjs, IsMultiple extends boolean = false>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<import("dayjs").Dayjs, Omit<import("antd/es/date-picker/generatePicker").PickerProps<import("dayjs").Dayjs>, "picker">, ValueType, IsMultiple>) => React.ReactElement) & {
        displayName?: string;
    };
    RangePicker: import("react").ForwardRefExoticComponent<Omit<import("@rc-component/picker").RangePickerProps<import("dayjs").Dayjs>, "classNames" | "styles" | "locale" | "generateConfig" | "hideHeader"> & {
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
        classNames?: import("antd/es/_util/hooks/useMergeSemantic/semanticType").DeepClassNameType<{
            root?: string;
            prefix?: string;
            input?: string;
            suffix?: string;
            popup?: string | {
                root?: string;
                header?: string;
                body?: string;
                content?: string;
                item?: string;
                footer?: string;
                container?: string;
            };
        } | undefined> | ((info: {
            props: import("antd/es/date-picker/generatePicker/interface").InjectDefaultProps<import("@rc-component/picker").RangePickerProps<import("dayjs").Dayjs>>;
        }) => import("antd/es/_util/hooks/useMergeSemantic/semanticType").DeepClassNameType<{
            root?: string;
            prefix?: string;
            input?: string;
            suffix?: string;
            popup?: string | {
                root?: string;
                header?: string;
                body?: string;
                content?: string;
                item?: string;
                footer?: string;
                container?: string;
            };
        } | undefined>);
        styles?: import("antd/es/_util/hooks/useMergeSemantic/semanticType").DeepStylesType<{
            root?: React.CSSProperties;
            prefix?: React.CSSProperties;
            input?: React.CSSProperties;
            suffix?: React.CSSProperties;
            popup?: {
                root?: React.CSSProperties;
                header?: React.CSSProperties;
                body?: React.CSSProperties;
                content?: React.CSSProperties;
                item?: React.CSSProperties;
                footer?: React.CSSProperties;
                container?: React.CSSProperties;
            };
        } | undefined> | ((info: {
            props: import("antd/es/date-picker/generatePicker/interface").InjectDefaultProps<import("@rc-component/picker").RangePickerProps<import("dayjs").Dayjs>>;
        }) => import("antd/es/_util/hooks/useMergeSemantic/semanticType").DeepStylesType<{
            root?: React.CSSProperties;
            prefix?: React.CSSProperties;
            input?: React.CSSProperties;
            suffix?: React.CSSProperties;
            popup?: {
                root?: React.CSSProperties;
                header?: React.CSSProperties;
                body?: React.CSSProperties;
                content?: React.CSSProperties;
                item?: React.CSSProperties;
                footer?: React.CSSProperties;
                container?: React.CSSProperties;
            };
        } | undefined>);
    } & import("react").RefAttributes<import("@rc-component/picker").PickerRef>>;
    TimePicker: (<ValueType = import("dayjs").Dayjs, IsMultiple extends boolean = false>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<import("dayjs").Dayjs, Omit<import("antd/es/date-picker/generatePicker/interface").GenericTimePickerProps<import("dayjs").Dayjs>, "picker">, ValueType, IsMultiple>) => React.ReactElement) & {
        displayName?: string;
    };
    QuarterPicker: (<ValueType = import("dayjs").Dayjs, IsMultiple extends boolean = false>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<import("dayjs").Dayjs, Omit<import("antd/es/date-picker/generatePicker").PickerProps<import("dayjs").Dayjs>, "picker">, ValueType, IsMultiple>) => React.ReactElement) & {
        displayName?: string;
    };
} & {
    _InternalPanelDoNotUseOrYouWillBeFired: (props: import("antd/es/_util/type").AnyObject) => import("react").JSX.Element;
    _InternalRangePanelDoNotUseOrYouWillBeFired: (props: import("antd/es/_util/type").AnyObject) => import("react").JSX.Element;
    generatePicker: <DateType extends import("antd/es/_util/type").AnyObject = import("antd/es/_util/type").AnyObject>(generateConfig: GenerateConfig<DateType>) => (<ValueType = DateType, IsMultiple extends boolean = false>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<DateType, import("antd/es/date-picker/generatePicker").PickerProps<DateType>, ValueType, IsMultiple>) => React.ReactElement) & {
        displayName?: string;
    } & {
        displayName?: string;
        WeekPicker: (<ValueType = DateType, IsMultiple_1 extends boolean = false>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<DateType, Omit<import("antd/es/date-picker/generatePicker").PickerProps<DateType>, "picker">, ValueType, IsMultiple_1>) => React.ReactElement) & {
            displayName?: string;
        };
        MonthPicker: (<ValueType = DateType, IsMultiple_2 extends boolean = false>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<DateType, Omit<import("antd/es/date-picker/generatePicker").PickerProps<DateType>, "picker">, ValueType, IsMultiple_2>) => React.ReactElement) & {
            displayName?: string;
        };
        YearPicker: (<ValueType = DateType, IsMultiple_3 extends boolean = false>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<DateType, Omit<import("antd/es/date-picker/generatePicker").PickerProps<DateType>, "picker">, ValueType, IsMultiple_3>) => React.ReactElement) & {
            displayName?: string;
        };
        RangePicker: import("react").ForwardRefExoticComponent<Omit<import("@rc-component/picker").RangePickerProps<DateType>, "classNames" | "styles" | "locale" | "generateConfig" | "hideHeader"> & {
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
            classNames?: import("antd/es/_util/hooks/useMergeSemantic/semanticType").DeepClassNameType<{
                root?: string;
                prefix?: string;
                input?: string;
                suffix?: string;
                popup?: string | {
                    root?: string;
                    header?: string;
                    body?: string;
                    content?: string;
                    item?: string;
                    footer?: string;
                    container?: string;
                };
            } | undefined> | ((info: {
                props: import("antd/es/date-picker/generatePicker/interface").InjectDefaultProps<import("@rc-component/picker").RangePickerProps<DateType>>;
            }) => import("antd/es/_util/hooks/useMergeSemantic/semanticType").DeepClassNameType<{
                root?: string;
                prefix?: string;
                input?: string;
                suffix?: string;
                popup?: string | {
                    root?: string;
                    header?: string;
                    body?: string;
                    content?: string;
                    item?: string;
                    footer?: string;
                    container?: string;
                };
            } | undefined>);
            styles?: import("antd/es/_util/hooks/useMergeSemantic/semanticType").DeepStylesType<{
                root?: React.CSSProperties;
                prefix?: React.CSSProperties;
                input?: React.CSSProperties;
                suffix?: React.CSSProperties;
                popup?: {
                    root?: React.CSSProperties;
                    header?: React.CSSProperties;
                    body?: React.CSSProperties;
                    content?: React.CSSProperties;
                    item?: React.CSSProperties;
                    footer?: React.CSSProperties;
                    container?: React.CSSProperties;
                };
            } | undefined> | ((info: {
                props: import("antd/es/date-picker/generatePicker/interface").InjectDefaultProps<import("@rc-component/picker").RangePickerProps<DateType>>;
            }) => import("antd/es/_util/hooks/useMergeSemantic/semanticType").DeepStylesType<{
                root?: React.CSSProperties;
                prefix?: React.CSSProperties;
                input?: React.CSSProperties;
                suffix?: React.CSSProperties;
                popup?: {
                    root?: React.CSSProperties;
                    header?: React.CSSProperties;
                    body?: React.CSSProperties;
                    content?: React.CSSProperties;
                    item?: React.CSSProperties;
                    footer?: React.CSSProperties;
                    container?: React.CSSProperties;
                };
            } | undefined>);
        } & import("react").RefAttributes<import("@rc-component/picker").PickerRef>>;
        TimePicker: (<ValueType = DateType, IsMultiple_4 extends boolean = false>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<DateType, Omit<import("antd/es/date-picker/generatePicker/interface").GenericTimePickerProps<DateType>, "picker">, ValueType, IsMultiple_4>) => React.ReactElement) & {
            displayName?: string;
        };
        QuarterPicker: (<ValueType = DateType, IsMultiple_5 extends boolean = false>(props: import("antd/es/date-picker/generatePicker/interface").PickerPropsWithMultiple<DateType, Omit<import("antd/es/date-picker/generatePicker").PickerProps<DateType>, "picker">, ValueType, IsMultiple_5>) => React.ReactElement) & {
            displayName?: string;
        };
    };
} & {
    defaultProps?: Partial<import("antd").DatePickerProps>;
    override?: (props: Partial<import("antd").DatePickerProps>) => Partial<import("antd").DatePickerProps>;
} & {
    BirthdayPicker: typeof BirthdayPicker;
    BoundedTimePicker: typeof BoundedTimePicker;
    DateFieldDependencyProvider: typeof DateFieldDependencyProvider;
};
