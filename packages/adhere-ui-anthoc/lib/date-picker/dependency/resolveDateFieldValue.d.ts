import type { FormInstance } from 'antd/es/form';
import type { DateFieldValue } from '../types';
export interface ResolveDateFieldValueOptions {
    fieldKey: string;
    registry: Record<string, DateFieldValue>;
    form?: FormInstance;
    externalGetFieldValue?: (fieldKey: string) => DateFieldValue;
}
/**
 * resolveDateFieldValue
 * @description 按优先级读取依赖字段值：externalGetFieldValue > form > registry
 */
export declare function resolveDateFieldValue({ fieldKey, registry, form, externalGetFieldValue, }: ResolveDateFieldValueOptions): DateFieldValue;
