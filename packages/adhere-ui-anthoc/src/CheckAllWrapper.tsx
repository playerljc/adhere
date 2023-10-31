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
    // () => {
    //   if (!options?.length) return false;
    //
    //   return options.map((_option) => _option.value).every((_value) => value?.includes(_value));
    // },
    [value, options],
  );

  return (
    <Checkbox
      indeterminate={indeterminate}
      checked={checkAll}
      onChange={(e) => {
        if (e.target.checked) {
          onChange?.(
            Array.from(new Set([...(options?.map?.((t) => t.value) ?? []), ...(value ?? [])])),
            [],
          );
        } else {
          const values = options?.map?.((_option) => _option.value) ?? [];
          onChange?.(
            value?.filter((_value) => !values.includes(_value)),
            [],
          );
        }
      }}
    >
      {Intl.v('全选')}
    </Checkbox>
  );
};

export default CheckAllWrapper;
