import React, { memo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { TagSelectProps } from '../types';
import VerticalCheckableTagGroup from './VerticalCheckableTagGroup';

/**
 * TagSelect
 * @param tagProps
 * @param props
 * @constructor
 */
const TagSelect: FC<TagSelectProps> = ({ tagProps, ...props }) => (
  <DropdownRenderSelect {...props}>
    {({ value, onChange, options }) => (
      <VerticalCheckableTagGroup
        value={value}
        onChange={onChange}
        options={(options as any[]) ?? []}
        {...(tagProps ?? {})}
      />
    )}
  </DropdownRenderSelect>
);

export default memo(TagSelect);
