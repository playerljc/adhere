import type { DataSourceItemConfig } from '../types';
import type { PhoneAreaCodeItem } from '../Dict/PhoneAreaCode';
/**
 * 根据数据源配置发起请求并映射为 PhoneAreaCodeItem（设计器预览用）
 *
 * 约定：
 * - labelKey / valueKey 沿用 dataSourceConfig.response 配置（缺省 label/value）
 * - 其他字段默认读取 iso2 / rule / search
 */
export declare function fetchDataSourceItemConfigAsPhoneAreaCodeItems(cfg: DataSourceItemConfig): Promise<PhoneAreaCodeItem[]>;
