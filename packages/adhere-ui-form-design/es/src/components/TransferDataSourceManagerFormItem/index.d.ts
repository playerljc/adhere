import { type FC } from 'react';
import type { I18nValue } from '../../types';
export interface TransferDataSourceItem {
    key: string;
    title: I18nValue | string;
    description?: I18nValue | string;
    disabled?: boolean;
}
export type TransferDataSource = TransferDataSourceItem[];
export type TransferDataSourceManagerFormItemValue = {
    type: 'static' | 'dynamic';
    dataSource?: TransferDataSource;
    dynamicConfigId?: string;
};
export interface TransferDataSourceManagerFormItemProps {
    value?: TransferDataSourceManagerFormItemValue;
    onChange?: (value: TransferDataSourceManagerFormItemValue) => void;
}
declare const TransferDataSourceManagerFormItem: FC<TransferDataSourceManagerFormItemProps>;
export default TransferDataSourceManagerFormItem;
