import type { DataSourceManagerFormItemValue } from '../components/DataSourceManagerFormItem';
import type { FieldProps } from '../types';
import { type DesignFieldDataSourceOption } from './dataSourceOptions';
export type UseDesignFieldDataSourceOptionsResult = {
    /** DataSourceManager 配置 */
    source: DataSourceManagerFormItemValue | undefined;
    options: DesignFieldDataSourceOption[];
    /** 动态数据源请求中 */
    loading: boolean;
    /** 已去掉设计器专用 key 的 fieldProps，可透传给 antd */
    restFieldProps: FieldProps;
};
/**
 * 设计器内：根据 fieldProps 上的数据源配置（静态 / 动态）得到 options 与 loading
 * @param designOptionsKey 如 selectOptions、后续 radioOptions 等
 */
export declare function useDesignFieldDataSourceOptions(fieldProps: FieldProps, designOptionsKey?: string): UseDesignFieldDataSourceOptionsResult;
