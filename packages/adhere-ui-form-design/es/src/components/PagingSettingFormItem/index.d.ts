import React, { type FC } from 'react';
export type PagingSettingValue = {
    defaultCurrent?: number;
    pageSize?: number;
    showSizeChanger?: boolean;
    pageSizeOptions?: number[];
    showQuickJumper?: boolean;
    simple?: boolean;
    hideOnSinglePage?: boolean;
    position?: Array<'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight'>;
    size?: 'default' | 'small';
};
export declare const DEFAULT_PAGING_SETTING: PagingSettingValue;
export interface PagingSettingFormItemProps {
    value?: PagingSettingValue;
    onChange?: (value: PagingSettingValue) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const PagingSettingFormItem: FC<PagingSettingFormItemProps>;
export default PagingSettingFormItem;
