import type { ReactNode } from 'react';
import type { DataSourceItem, DataSourceManagerFormItemValue } from '../components/DataSourceManagerFormItem';
import type { DataSourceItemConfig, DesignValue, FieldProps } from '../types';
/** 与设计器 antd Select / Radio 等 options 形态对齐的条目 */
export type DesignFieldDataSourceOption = {
    label: ReactNode;
    value: string | number;
};
/**
 * 静态数据源条目的 label 解析为当前语言展示文案
 */
export declare function resolveDataSourceOptionLabel(label: DataSourceItem['label'], lang: string): string;
/**
 * 从 fieldProps 上读取 DataSourceManagerFormItem 写入的配置（如 selectOptions、后续 radioOptions）
 */
export declare function parseDataSourceManagerValueFromFieldProps(fieldProps: FieldProps, fieldKey: string): DataSourceManagerFormItemValue | undefined;
/**
 * 静态数据源 → options
 */
export declare function staticDataSourceToDesignOptions(source: DataSourceManagerFormItemValue | undefined, lang: string): DesignFieldDataSourceOption[];
/**
 * 根据 dynamicConfigId 在根设计值的全局 dataSourceConfig 中查找条目
 */
export declare function findDataSourceItemConfigByDynamicId(root: DesignValue | undefined, dynamicConfigId: string): DataSourceItemConfig | undefined;
/**
 * 按数据源配置发起请求并映射为 options（设计器预览用）
 */
export declare function fetchDataSourceItemConfigAsOptions(cfg: DataSourceItemConfig): Promise<DesignFieldDataSourceOption[]>;
/**
 * 从 fieldProps 中移除设计器专用 key，避免透传给 antd 控件
 */
export declare function omitFieldPropsDesignKey(fieldProps: FieldProps, designOptionsKey: string): FieldProps;
