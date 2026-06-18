import React from 'react';
import type { I18nValue } from '../../types';
export type TableSelectColumnAlign = 'left' | 'center' | 'right';
export type TableSelectColumnFixed = 'none' | 'left' | 'right';
export type TableSelectColumnDefaultSortOrder = 'none' | 'ascend' | 'descend';
export interface TableSelectColumnSettingItem {
    id: string;
    title?: I18nValue;
    dataIndex?: string;
    visible?: boolean;
    width?: number;
    align?: TableSelectColumnAlign;
    ellipsis?: boolean;
    fixed?: TableSelectColumnFixed;
    sorter?: boolean;
    defaultSortOrder?: TableSelectColumnDefaultSortOrder;
}
export interface TableSelectColumnSettingFormItemProps {
    value?: TableSelectColumnSettingItem[];
    onChange?: (value: TableSelectColumnSettingItem[]) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: React.NamedExoticComponent<TableSelectColumnSettingFormItemProps>;
export default _default;
