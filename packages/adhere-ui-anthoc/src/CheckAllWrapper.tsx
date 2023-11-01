import React, { FC, useMemo } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import Checkbox from './checkbox';
import { CheckAllWrapperProps } from './types';

/**
 * CheckAllWrapper
 * @param value
 * @param onChange
 * @param options
 * @constructor
 */
const CheckAllWrapper: FC<CheckAllWrapperProps> = ({ value, onChange, options }) => {
  const checkAll = useMemo(() => {
    if (!options?.length) return false;

    return options.map((_option) => _option.value).every((_value) => value?.includes(_value));
  }, [value, options]);

  const indeterminate = useMemo(
    () => value?.length > 0 && value?.length < (options ?? []).length,
    [value, options],
  );

  return (
    <Checkbox
      indeterminate={indeterminate}
      checked={checkAll}
      onChange={(e) => {
        if (e.target.checked) {
          const values = Array.from(
            new Set([...(options?.map?.((t) => t.value) ?? []), ...(value ?? [])]),
          );
          onChange?.(values, true, values);
        } else {
          const values = options?.map?.((_option) => _option.value) ?? [];
          const changeValues = value?.filter((_value) => !values.includes(_value));
          onChange?.(changeValues, false, changeValues);
        }
      }}
    >
      {Intl.v('全选')}
    </Checkbox>
  );
};

export default CheckAllWrapper;
