import React, { memo } from 'react';
import type { FC } from 'react';

import CheckAllMultipleSelect from '../multiple-select/CheckAllMultipleSelect';
import type { CheckAllListSelectProps } from '../types';
import CheckboxList from './CheckboxList';

/**
 * CheckAllListSelect
 * @description 可以全选的ListSelect
 * @param listProps
 * @param props
 * @constructor
 */
const CheckAllListSelect: FC<CheckAllListSelectProps> = ({ listProps, ...props }) => (
  <CheckAllMultipleSelect {...props}>
    {({ value, onChange, options }) => (
      <CheckboxList
        value={value}
        onChange={(v) => onChange?.(v, [])}
        options={options}
        {...(listProps ?? {})}
      />
    )}
  </CheckAllMultipleSelect>
);

export default memo(CheckAllListSelect);
