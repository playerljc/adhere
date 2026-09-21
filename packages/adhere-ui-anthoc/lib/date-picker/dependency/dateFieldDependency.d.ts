import type { DateFieldDisabledDate, DateFieldValue } from '../types';
/**
 * isStartDateField
 * @description 判断字段是否为时间区间的开始字段（命名中包含 start/Start）
 */
export declare function isStartDateField(key: string): boolean;
/**
 * isEndDateField
 * @description 判断字段是否为时间区间的结束字段（命名中包含 end/End）
 */
export declare function isEndDateField(key: string): boolean;
/**
 * getDateDependenciesDisabledDate
 * @description 根据 dependencies 生成 datePicker 之间相互制约的 disabledDate
 *
 * 与用户自定义 disabledDate 为合并关系：先执行 userDisabledDate，
 * 再按 dependencies 逐个读取依赖值并应用 start/end 规则。
 */
export declare function getDateDependenciesDisabledDate(fieldKey: string, dependencies: string[] | undefined, getFieldValue: (fieldKey: string) => DateFieldValue, userDisabledDate?: DateFieldDisabledDate): DateFieldDisabledDate | undefined;
