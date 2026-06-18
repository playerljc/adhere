import type { TableDataSourceManagerFormItemValue } from '../components/TableDataSourceManagerFormItem';
import type { DataSourceItemConfig, FieldProps } from '../types';
export type TableDataRow = Record<string, unknown>;
export declare function parseTableDataSourceValueFromFieldProps(fieldProps: FieldProps, fieldKey?: string): TableDataSourceManagerFormItemValue | undefined;
export declare function staticTableDataSourceToRows(source: TableDataSourceManagerFormItemValue | undefined): TableDataRow[];
export declare function fetchDataSourceItemConfigAsTableRows(cfg: DataSourceItemConfig): Promise<TableDataRow[]>;
export declare function omitFieldPropsTableOptionsKey(fieldProps: FieldProps, designOptionsKey?: string): FieldProps;
export type UseDesignFieldTableDataSourceResult = {
    source: TableDataSourceManagerFormItemValue | undefined;
    dataSource: TableDataRow[];
    loading: boolean;
    restFieldProps: FieldProps;
};
export declare function useDesignFieldTableDataSource(fieldProps: FieldProps, designOptionsKey?: string): UseDesignFieldTableDataSourceResult;
