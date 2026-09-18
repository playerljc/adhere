import type { Dayjs } from 'dayjs';

import type { DateFieldDisabledDate, DateFieldValue } from '../types';

/** fieldKey 包含以下片段时，识别为开始日期字段 */
const START_DATE_FIELD_KEYS = ['start', 'Start'] as const;
/** fieldKey 包含以下片段时，识别为结束日期字段 */
const END_DATE_FIELD_KEYS = ['end', 'End'] as const;

/**
 * isStartDateField
 * @description 判断字段是否为时间区间的开始字段（命名中包含 start/Start）
 */
export function isStartDateField(key: string): boolean {
  return START_DATE_FIELD_KEYS.some((token) => key.includes(token));
}

/**
 * isEndDateField
 * @description 判断字段是否为时间区间的结束字段（命名中包含 end/End）
 */
export function isEndDateField(key: string): boolean {
  return END_DATE_FIELD_KEYS.some((token) => key.includes(token));
}

/**
 * shouldDisableByDependency
 * @description 根据当前字段与依赖字段的 start/end 角色，判断某个日期是否应被禁用
 *
 * 规则：
 * - 当前为开始字段 + 依赖为结束字段：禁用晚于结束日期的天
 * - 当前为结束字段 + 依赖为开始字段：禁用早于开始日期的天
 * - 其他组合：不施加 dependency 制约（返回 false）
 */
function shouldDisableByDependency(
  current: Dayjs,
  fieldKey: string,
  depKey: string,
  depValue: DateFieldValue,
): boolean {
  if (!depValue) {
    return false;
  }

  const isSelfStart = isStartDateField(fieldKey);
  const isSelfEnd = isEndDateField(fieldKey);
  const isDepStart = isStartDateField(depKey);
  const isDepEnd = isEndDateField(depKey);

  if (isSelfStart && isDepEnd) {
    return current.isAfter(depValue, 'day');
  }

  if (isSelfEnd && isDepStart) {
    return current.isBefore(depValue, 'day');
  }

  return false;
}

/**
 * getDateDependenciesDisabledDate
 * @description 根据 dependencies 生成 datePicker 之间相互制约的 disabledDate
 *
 * 与用户自定义 disabledDate 为合并关系：先执行 userDisabledDate，
 * 再按 dependencies 逐个读取依赖值并应用 start/end 规则。
 */
export function getDateDependenciesDisabledDate(
  fieldKey: string,
  dependencies: string[] | undefined,
  getFieldValue: (fieldKey: string) => DateFieldValue,
  userDisabledDate?: DateFieldDisabledDate,
): DateFieldDisabledDate | undefined {
  if (!dependencies?.length) {
    return userDisabledDate;
  }

  return (current, info) => {
    if (userDisabledDate?.(current, info)) {
      return true;
    }

    if (!current) {
      return false;
    }

    return dependencies.some((depKey) =>
      shouldDisableByDependency(current, fieldKey, depKey, getFieldValue(depKey)),
    );
  };
}
