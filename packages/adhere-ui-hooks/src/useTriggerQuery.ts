import { useCreation, useLatest } from 'ahooks';
import { useImmer } from 'use-immer';

/**
 * useTriggerQuery
 * @param defaultValue
 */
function useTriggerQuery<T extends Record<string, any>>(defaultValue: T) {
  const memoDefaultValue = useCreation(() => defaultValue, []);

  // 状态参数
  const [fieldsValue, setFieldsValue] = useImmer(memoDefaultValue ?? {});

  // 查询参数
  const [searchParams, setSearchParams] = useImmer(memoDefaultValue ?? {});

  const targetFieldsValueRef = useLatest(fieldsValue);

  const targetSearchParamsRef = useLatest(searchParams);

  function search() {
    const keys = Object.keys(targetFieldsValueRef.current);

    setSearchParams((draft) => {
      keys.forEach((key) => {
        draft[key] = targetFieldsValueRef.current[key];
      });
    });
  }

  function reset() {
    const keys = Object.keys(memoDefaultValue);

    setFieldsValue((draft) => {
      keys.forEach((key) => {
        draft[key] = memoDefaultValue[key];
      });
    });

    setSearchParams((draft) => {
      keys.forEach((key) => {
        draft[key] = memoDefaultValue[key];
      });
    });
  }

  return {
    setFieldsValue,
    fieldsValue: targetFieldsValueRef.current,
    searchParams: targetSearchParamsRef.current,
    search,
    reset,
  };
}

export default useTriggerQuery;
