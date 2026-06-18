import type { TreeDataSourceManagerFormItemValue } from '../components/TreeDataSourceManagerFormItem';
import type { DataSourceItemConfig, FieldProps } from '../types';
export type TreeDataNode = Record<string, unknown>;
export declare function parseTreeDataSourceValueFromFieldProps(fieldProps: FieldProps, fieldKey?: string): TreeDataSourceManagerFormItemValue | undefined;
export declare function staticTreeDataSourceToNodes(source: TreeDataSourceManagerFormItemValue | undefined): TreeDataNode[];
export declare function fetchDataSourceItemConfigAsTreeNodes(cfg: DataSourceItemConfig): Promise<TreeDataNode[]>;
export declare function omitFieldPropsTreeOptionsKey(fieldProps: FieldProps, designOptionsKey?: string): FieldProps;
export type UseDesignFieldTreeDataSourceResult = {
    source: TreeDataSourceManagerFormItemValue | undefined;
    treeData: TreeDataNode[];
    loading: boolean;
    restFieldProps: FieldProps;
};
export declare function useDesignFieldTreeDataSource(fieldProps: FieldProps, designOptionsKey?: string): UseDesignFieldTreeDataSourceResult;
