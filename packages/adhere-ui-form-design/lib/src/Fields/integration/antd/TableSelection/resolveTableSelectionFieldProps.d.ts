import type { TableProps } from 'antd';
import type { PagingSettingValue } from '../../../../components';
import type { TableSelectColumnSettingItem } from '../../../../components';
import type { I18nValue } from '../../../../types';
import type { TableDataRow } from '../../../../utils/tableDataSource';
export type TableSelectionFieldConfig = {
    showSearch?: boolean;
    searchPlaceholder?: I18nValue | string;
    searchAllowClear?: boolean;
    bordered?: boolean;
    loading?: boolean;
    size?: string;
    showHeader?: boolean;
    tableLayout?: 'auto' | 'fixed';
    rowKey?: string;
    rowSelectionType?: 'checkbox' | 'radio';
    hideSelectAll?: boolean;
    rowSelectionFixed?: boolean;
    rowSelectionColumnWidth?: number;
    pagination?: boolean;
    paginationSetting?: PagingSettingValue;
    scrollY?: number;
    columnSetting?: TableSelectColumnSettingItem[];
    disabled?: boolean;
};
export declare function resolveTableColumns(columnSetting: TableSelectColumnSettingItem[] | undefined, lang: string, options?: {
    isMobile?: boolean;
}): TableProps<TableDataRow>['columns'];
export declare function resolveTableSize(size?: string): TableProps<TableDataRow>['size'];
export declare function resolveTablePagination(pagination?: boolean, paginationSetting?: PagingSettingValue): TableProps<TableDataRow>['pagination'];
export declare function resolveMobileScrollX(columnSetting: TableSelectColumnSettingItem[] | undefined, rowSelectionColumnWidth?: number): number;
export declare function pickTableSelectionTableProps(fieldProps: TableSelectionFieldConfig, lang: string, options?: {
    isMobile?: boolean;
}): Omit<TableProps<TableDataRow>, 'rowSelection' | 'dataSource' | 'scroll'>;
