import type { SearchFieldCollectorOptions, SearchFieldItem } from './types';
/**
 * collectSearchFieldConfigs
 * @description 收集所有可见查询项配置
 */
export declare function collectSearchFieldConfigs({ columns, assignSearchConfig, hasAuthority, }: SearchFieldCollectorOptions): SearchFieldItem[];
