import { useCallback, useEffect, useState } from 'react';



import type { FormTabsErrorField, FormTabsNamePath, SegmentedFormTab, UseFormTabs } from './types';


function namePathToSegments(name: FormTabsNamePath): string[] {
  if (Array.isArray(name)) {
    return name.map(String);
  }

  return String(name).split('.');
}

function isListIndexSegment(segment: string): boolean {
  return /^\d+$/.test(segment);
}

function isWildcardSegment(segment: string): boolean {
  return segment === '*';
}

/**
 * 判断 tabs 配置的 fieldName 是否与校验错误 name 匹配。
 *
 * 支持：
 * - 普通字段 / 嵌套对象：完全相等，或 error 以 field 为前缀（如 user → user.name）
 * - Form.List：error 路径中的纯数字段视为 list 下标，可与 field 中省略的下标对齐
 *   例：field ['users', 'name'] 匹配 error ['users', 0, 'name']
 * - 显式通配：field 中的 '*' 匹配 error 中的任意单段（含 list 下标）
 *   例：field ['users', '*', 'name'] 同上
 */
export function namePathMatchesError(
  fieldName: FormTabsNamePath,
  errorName: FormTabsNamePath,
): boolean {
  const fieldParts = namePathToSegments(fieldName);
  const errorParts = namePathToSegments(errorName);

  const fieldKey = fieldParts.join('.');
  const errorKey = errorParts.join('.');

  if (errorKey === fieldKey || errorKey.startsWith(`${fieldKey}.`)) {
    return true;
  }

  let fi = 0;
  let ei = 0;

  for (; ei < errorParts.length && fi < fieldParts.length; ei += 1) {
    const fieldSegment = fieldParts[fi];
    const errorSegment = errorParts[ei];

    if (isWildcardSegment(fieldSegment)) {
      fi += 1;
      continue;
    }

    if (errorSegment === fieldSegment) {
      fi += 1;
      continue;
    }

    if (isListIndexSegment(errorSegment)) {
      continue;
    }

    return false;
  }

  if (fi !== fieldParts.length) {
    return false;
  }

  return ei >= errorParts.length;
}

/**
 * 按 tabs 配置顺序，找到第一个包含校验失败字段的分段 key
 */
export function findFirstTabKeyWithErrors(
  errorFields: FormTabsErrorField[] | undefined,
  tabs: SegmentedFormTab[],
): string | null {
  if (!errorFields?.length || !tabs?.length) {
    return null;
  }

  for (const { key, fieldNames } of tabs) {
    const hasError = fieldNames.some((fieldName) =>
      errorFields.some(({ name }) => namePathMatchesError(fieldName, name)),
    );

    if (hasError) {
      return key;
    }
  }

  const firstErrorParts = namePathToSegments(errorFields[0].name);

  for (let len = firstErrorParts.length; len >= 1; len -= 1) {
    const prefix = firstErrorParts.slice(0, len);

    for (const { key, fieldNames } of tabs) {
      const matched = fieldNames.some((fieldName) => namePathMatchesError(fieldName, prefix));

      if (matched) {
        return key;
      }
    }
  }

  return null;
}

type ValidateErrorLike = {
  errorFields?: FormTabsErrorField[];
};

/**
 * Segmented 多页签与单 Form 联动：校验失败时按 tabs 顺序切换到首个有错误的页签。
 *
 * 支持 Form.List：fieldNames 可写 list 根路径 `['users']`，或省略下标的子字段 `['users', 'name']`、
 * `['users', '*', 'name']`（与 antd 报错路径 `['users', 0, 'name']` 对齐）。
 *
 * @example
 * ```tsx
 * const tabs = useMemo(
 *   () => [
 *     { key: 'a', fieldNames: ['checkList'] },
 *     { key: 'b', fieldNames: [['users', 'name']] },
 *   ],
 *   [],
 * );
 *
 * const { activeTab, setActiveTab, validateFields } = useFormTabs({
 *   form: formInstance,
 *   tabs,
 *   defaultTab: 'a',
 * });
 * ```
 */
const useFormTabs: UseFormTabs = ({ form, tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState<string | undefined>(() => defaultTab ?? tabs[0]?.key);

  const validateFields = useCallback(
    ((...args: Parameters<typeof form.validateFields>) => {
      return form.validateFields(...args).catch((error: ValidateErrorLike) => {
        const tabKey = findFirstTabKeyWithErrors(error?.errorFields, tabs);

        if (tabKey != null) {
          setActiveTab(tabKey);
        }

        throw error;
      });
    }) as typeof form.validateFields,
    [form, tabs],
  );

  useEffect(() => {
    setActiveTab(defaultTab ?? tabs[0]?.key);
  }, [defaultTab, tabs]);

  return {
    activeTab,
    setActiveTab,
    validateFields,
  };
};

export default useFormTabs;
