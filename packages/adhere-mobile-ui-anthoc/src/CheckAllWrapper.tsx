import React, { FC, useMemo } from 'react';

import Checkbox from './checkbox';
import type { CheckAllWrapperProps } from './types';

/**
 * CheckAllWrapper
 * @param value
 * @param onChange
 * @param options
 * @constructor
 */
const CheckAllWrapper: FC<CheckAllWrapperProps> = ({
  value,
  onCheckAllChange,
  options,
  children,
}) => {
  const checkAll = useMemo(() => {
    if (!options?.length) return false;

    return options.every((_value) => value?.includes(_value));
  }, [value, options]);

  const indeterminate = useMemo(
    () => (value ?? []).length > 0 && (value ?? []).length < (options ?? []).length,
    [value, options],
  );

  return (
    <Checkbox
      indeterminate={indeterminate}
      checked={checkAll}
      onChange={(checked) => {
        if (checked) {
          const values = Array.from(new Set([...(options ?? []), ...(value ?? [])]));
          onCheckAllChange?.(values, true, values);
        } else {
          const values = options ?? [];
          const changeValues = value?.filter((_value) => !values.includes(_value)) ?? [];
          onCheckAllChange?.(changeValues, false, changeValues);
        }
      }}
    >
      {children}
    </Checkbox>
  );
};

export default CheckAllWrapper;
