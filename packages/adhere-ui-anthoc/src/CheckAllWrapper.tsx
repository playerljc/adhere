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

    return value?.length === options?.length;
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
          onChange?.(options?.map?.((t) => t.value) ?? [], []);
        } else {
          onChange?.([], []);
        }
      }}
    >
      {Intl.v('全选')}
    </Checkbox>
  );
};

export default CheckAllWrapper;
