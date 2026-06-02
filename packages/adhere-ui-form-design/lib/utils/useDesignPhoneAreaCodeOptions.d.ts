import type { PhoneAreaCodeItem } from '../Dict/PhoneAreaCode';
import type { AreaCodePhoneDataSourceManagerFormItemValue } from '../components/AreaCodePhoneDataSourceManagerFormItem';
import type { FieldProps } from '../types';
export type UseDesignPhoneAreaCodeOptionsResult = {
    source: AreaCodePhoneDataSourceManagerFormItemValue | undefined;
    options: PhoneAreaCodeItem[];
    loading: boolean;
};
/**
 * 设计器内：读取 area code 数据源配置，得到 PhoneAreaCodeItem[]（静态 JSON / 动态 dataSourceConfig）
 */
export declare function useDesignPhoneAreaCodeOptions(fieldProps: FieldProps, fieldKey?: string): UseDesignPhoneAreaCodeOptionsResult;
