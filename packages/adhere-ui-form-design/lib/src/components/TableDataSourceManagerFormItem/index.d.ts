import { type FC } from 'react';
export type TableDataSourceManagerFormItemValue = {
    type: 'static' | 'dynamic';
    dataSourceJson?: string;
    dynamicConfigId?: string;
};
export interface TableDataSourceManagerFormItemProps {
    value?: TableDataSourceManagerFormItemValue;
    onChange?: (value: TableDataSourceManagerFormItemValue) => void;
}
declare const TableDataSourceManagerFormItem: FC<TableDataSourceManagerFormItemProps>;
export default TableDataSourceManagerFormItem;
