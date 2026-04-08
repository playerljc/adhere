import { type FC } from 'react';
import type { I18nValue } from '../../types';
export interface DataSourceItem {
    label: string | I18nValue;
    value: string | number;
    [key: string]: any;
}
export type DataSource = DataSourceItem[];
export type DataSourceManagerFormItemValue = {
    type: 'static' | 'dynamic';
    dataSource?: DataSource;
    dynamicConfigId?: string;
};
export interface DataSourceManagerFormItemProps {
    value?: DataSourceManagerFormItemValue;
    onChange?: (value: DataSourceManagerFormItemValue) => void;
}
/**
 * DataSourceManagerFormItem
 */
declare const DataSourceManagerFormItem: FC<DataSourceManagerFormItemProps>;
export default DataSourceManagerFormItem;
