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
 *
 * Form 场景下通常走 form.getFieldValue；registry 作为兜底，
 * 用于 Provider 刚挂载或 Form 值尚未写入时的短暂窗口。
 */
export declare function resolveDateFieldValue({ fieldKey, registry, form, externalGetFieldValue, }: ResolveDateFieldValueOptions): DateFieldValue;
