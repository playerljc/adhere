import type { ColumnSearchConfig, ColumnTypeExt } from '../../types';
export interface SearchFieldItem {
    searchConfig: ColumnSearchConfig;
    column: ColumnTypeExt;
    dataIndex: string;
}
export interface SearchFieldCollectorOptions {
    columns: ColumnTypeExt[];
    assignSearchConfig: (searchConfig: ColumnSearchConfig | undefined, column: ColumnTypeExt) => ColumnSearchConfig;
    hasAuthority?: (authority?: string[]) => boolean;
}
export interface SearchFieldValidationContext {
    state: Record<string, any>;
    fields: SearchFieldItem[];
    onError?: (fieldTitle: string, message: string) => void;
}
