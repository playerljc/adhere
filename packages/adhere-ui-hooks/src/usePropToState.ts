import { useUpdateEffect } from 'ahooks';
import { useState } from 'react';

/**
 * usePropToState
 * @description 将props中的某值转换成state，用户在组件中对props进行更新使用，用props同步state
 */
function usePropToState<T>(propValue: T) {
  const [value, setValue] = useState<T>(propValue);

  useUpdateEffect(() => {
    setValue(propValue);
  }, [propValue]);

  return [value, setValue];
}

export default usePropToState;
