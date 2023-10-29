import React, { memo } from 'react';
import type { FC } from 'react';

import CheckAllMultipleSelect from '../multiple-select/CheckAllMultipleSelect';
import type { CheckAllTagSelectProps } from '../types';
import VerticalCheckableTagGroup from './VerticalCheckableTagGroup';

/**
 * CheckAllTagSelect
 * @param tagProps
 * @param props
 * @constructor
 */
const CheckAllTagSelect: FC<CheckAllTagSelectProps> = ({ tagProps, ...props }) => (
  <CheckAllMultipleSelect {...props} mode="multiple">
    {({ value, onChange, options }) => (
      <VerticalCheckableTagGroup
        mode="multiple"
        value={value}
        onChange={onChange}
        options={(options as any[]) ?? []}
        {...(tagProps ?? {})}
      />
    )}
  </CheckAllMultipleSelect>
);

export default memo(CheckAllTagSelect);
