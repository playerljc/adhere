import type { DatePickerProps as AntDatePickerProps } from 'antd';
import { useCallback, useEffect, useMemo } from 'react';

import type { UseDateFieldDependencyDatePickerOptions } from '../types';
import { useDateFieldDependency } from './DateFieldDependencyContext';
import { getDateDependenciesDisabledDate } from './dateFieldDependency';
import { normalizeDateFieldValue } from './normalizeDateFieldValue';

/**
 * useDateFieldDependencyDatePicker
 * @description 封装 DatePicker 的 dependencies 注册、disabledDate 合并与 onChange 同步
 *
 * 工作流程：
 * 1. 挂载时将 fieldKey + value 注册到 Provider registry
 * 2. onChange 时同步更新 registry，便于非 Form 或 form 延迟同步场景
 * 3. 基于 dependencies 与 getFieldValue 合并出 mergedDisabledDate
 * 4. 卸载时 unregister，避免残留 fieldKey
 *
 * 未包裹 DateFieldDependencyProvider 时，dependencies 不生效，退化为普通 DatePicker。
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

    return getDateDependenciesDisabledDate(fieldKey, dependencies, getFieldValue, userDisabledDate);
    // version / value 变化时需要重算 disabledDate，以便反映依赖字段的最新值
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
