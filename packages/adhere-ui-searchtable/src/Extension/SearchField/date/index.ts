import type { DatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';

const START_DATE_FIELD_KEYS = ['start', 'Start'] as const;
const END_DATE_FIELD_KEYS = ['end', 'End'] as const;

type DateFieldValue = Dayjs | null | undefined;
type DateFieldDisabledDate = DatePickerProps['disabledDate'];

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
 * @description 根据 $search.dependencies 生成 datePicker 之间相互制约的 disabledDate
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
