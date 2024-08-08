import { useCreation, useLatest } from 'ahooks';
import { useImmer } from 'use-immer';

import useSetState from './useSetState';

/**
 * useTriggerQuery
 * @param defaultValue
 */
function useTriggerQuery<T extends Record<string, any>>(defaultValue: T) {
  const memoDefaultValue = useCreation(() => defaultValue, []);

  // 状态参数
  const [fieldsValue, setFieldsValue] = useImmer(memoDefaultValue ?? {});

  // 查询参数
  const [targetSearchParamsRef, setSearchParams] = useSetState(memoDefaultValue ?? {});

  const targetFieldsValueRef = useLatest(fieldsValue);

  function search(cb) {
    const keys = Object.keys(targetFieldsValueRef.current);

    const searchParams: any = {};
    keys.forEach((key) => {
      searchParams[key] = targetFieldsValueRef.current[key];
    });
    setSearchParams(searchParams, cb);
  }

  function reset(cb) {
    const keys = Object.keys(memoDefaultValue);

    setFieldsValue((draft) => {
      keys.forEach((key) => {
        draft[key] = memoDefaultValue[key];
      });
    });

    const searchParams: any = {};
    keys.forEach((key) => {
      searchParams[key] = memoDefaultValue[key];
    });
    setSearchParams(searchParams, cb);
  }

  return {
    setFieldsValue,
    fieldsValue: targetFieldsValueRef,
    searchParams: targetSearchParamsRef,
    search,
    reset,
  };
}

export default useTriggerQuery;
