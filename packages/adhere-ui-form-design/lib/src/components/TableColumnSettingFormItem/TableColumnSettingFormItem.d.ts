import React from 'react';
import type { I18nValue } from '../../types';
export type TableColumnWidthMode = 'adaptive' | 'auto' | 'percent' | 'number';
export type TableColumnAlign = 'left' | 'center' | 'right';
export type TableColumnEditorType = 'input' | 'select' | 'textArea' | 'inputNumber' | 'inputNumberDecimal1' | 'inputNegativeNumberDecimal1' | 'inputPositiveNumberDecimal1' | 'inputNumberDecimal1French' | 'inputNumberDecimal1German' | 'inputNumberDecimal1International' | 'inputNumberDecimal1US' | 'inputNumberDecimal2' | 'inputNegativeNumberDecimal2' | 'inputPositiveNumberDecimal2' | 'inputNumberDecimal2French' | 'inputNumberDecimal2German' | 'inputNumberDecimal2International' | 'inputNumberDecimal2US' | 'inputNumberInteger' | 'inputNegativeNumberInteger' | 'inputPositiveNumberInteger' | 'inputNumberIntegerFrench' | 'inputNumberIntegerGerman' | 'inputNumberIntegerInternational' | 'inputNumberIntegerUS' | 'datePicker' | 'birthdayPicker' | 'boundedTimePicker' | 'timePicker' | 'rangePicker' | 'slider' | 'sliderRange' | 'rate' | 'switch' | 'colorPicker';
export interface TableColumnSettingItem {
    id: string;
    title?: I18nValue;
    field?: string;
    defaultValue?: any;
    widthMode?: TableColumnWidthMode;
    widthValue?: number;
    align?: TableColumnAlign;
    editorType?: TableColumnEditorType;
    editorSetting?: Record<string, any>;
}
export interface TableColumnSettingFormItemProps {
    value?: TableColumnSettingItem[];
    onChange?: (value: TableColumnSettingItem[]) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: React.NamedExoticComponent<TableColumnSettingFormItemProps>;
export default _default;
