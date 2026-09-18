import type { DatePickerProps as AntDatePickerProps } from 'antd';
import { useCallback, useEffect, useMemo } from 'react';

import type { UseDateFieldDependencyDatePickerOptions } from '../types';
import { useDateFieldDependency } from './DateFieldDependencyContext';
import { getDateDependenciesDisabledDate } from './dateFieldDependency';
import { normalizeDateFieldValue } from './normalizeDateFieldValue';

/**
 * useDateFieldDependencyDatePicker
 * @description 封装 DatePicker 的 dependencies 注册、disabledDate 合并与 onChange 同步
 */
export function useDateFieldDependencyDatePicker({
  fieldKey,
  dependencies,
  value,
  onChange,
  disabledDate: userDisabledDate,
}: UseDateFieldDependencyDatePickerOptions) {
  const dependencyContext = useDateFieldDependency();
  const { register, unregister, getFieldValue, version } = dependencyContext ?? {};

  useEffect(() => {
    if (!fieldKey || !register || !unregister) {
      return undefined;
    }

    register(fieldKey, normalizeDateFieldValue(value));

    return () => {
      unregister(fieldKey);
    };
  }, [fieldKey, value, register, unregister]);

  const mergedDisabledDate = useMemo(() => {
    if (!fieldKey || !dependencies?.length || !getFieldValue) {
      return userDisabledDate;
    }

    return getDateDependenciesDisabledDate(
      fieldKey,
      dependencies,
      getFieldValue,
      userDisabledDate,
    );
  }, [fieldKey, dependencies, userDisabledDate, getFieldValue, version, value]);

  const handleChange = useCallback<NonNullable<AntDatePickerProps['onChange']>>(
    (date, dateString) => {
      if (fieldKey && register) {
        register(fieldKey, normalizeDateFieldValue(date));
      }

      onChange?.(date, dateString);
    },
    [fieldKey, register, onChange],
  );

  return {
    mergedDisabledDate,
    handleChange,
  };
}
