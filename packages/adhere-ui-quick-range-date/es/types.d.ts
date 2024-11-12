import type { RadioGroupProps } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { CSSProperties, ReactNode } from 'react';
import type { NamedExoticComponent } from 'react';
import { datesToNumbers, getDataRangeByValue, getLabel, getValueEntityByStringValue, numberToDayjs, stringValue, sync } from './QuickRangeDate';
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
    sync: typeof sync;
    stringValue: typeof stringValue;
    getLabel: typeof getLabel;
    numberToDayjs: typeof numberToDayjs;
    datesToNumbers: typeof datesToNumbers;
    getValueEntityByStringValue: typeof getValueEntityByStringValue;
    getDataRangeByValue: typeof getDataRangeByValue;
};
