import type { RadioGroupProps } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import type { CSSProperties, ReactNode } from 'react';
import type { NamedExoticComponent } from 'react';
export type DateType = 'a-d' | 'a-w' | 'a-M' | 'a-Q' | 'a-y' | 'a-h' | 'a-m' | 'a-s' | 'a-ms' | 'b-d' | 'b-w' | 'b-M' | 'b-Q' | 'b-y' | 'b-h' | 'b-m' | 'b-s' | 'b-ms' | 'custom';
export type DateValue = {
    type: DateType;
    value?: number | undefined;
    start?: number;
    end?: number;
};
export type ConfigItem = DateValue & {
    label?: ReactNode;
    render?: (value?: DateValue) => ReactNode;
};
export type QuickRangeDateChange = (value: DateValue) => void;
export interface QuickRangeDateProps {
    className?: string;
    style?: CSSProperties;
    config: ConfigItem[];
    value?: DateValue;
    onChange?: QuickRangeDateChange;
    rangePickerProps?: RangePickerProps;
    radioGroupProps?: RadioGroupProps;
    children?: (params: {
        defaultElement: ReactNode;
        value?: DateValue;
        onChange?: QuickRangeDateChange;
    }) => ReactNode;
}
/**
 * QuickRangeDateComponent
 */
export type QuickRangeDateComponent = NamedExoticComponent<QuickRangeDateProps> & {
    sync: (dateValue: DateValue | undefined) => DateValue | undefined;
    stringValue: (dateValue: DateValue | undefined) => undefined | string;
    getLabel: (params: {
        type: DateType;
        value?: number;
    }) => ReactNode;
    numberToDayjs: (dateValue: [number | undefined, number | undefined]) => null | [dayjs.Dayjs, dayjs.Dayjs];
    datesToNumbers: (_value: undefined | [dayjs.Dayjs, dayjs.Dayjs] | []) => [undefined | number, undefined | number];
    getValueEntityByStringValue: (stringValue: string) => {
        type: DateType;
        value: number;
    };
};
