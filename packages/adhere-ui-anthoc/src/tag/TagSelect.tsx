import React, { memo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { TagSelectProps } from '../types';
import VerticalCheckableTagGroup from './VerticalCheckableTagGroup';
import useRenderProps from './useRenderProps';

/**
 * TagSelect
 * @param tagProps
 * @param props
 * @constructor
 */
const TagSelect: FC<TagSelectProps> = ({ tagProps, ...props }) => {
  const renderProps = useRenderProps(tagProps);

  return (
    <DropdownRenderSelect {...props}>
      {({ originNode, ...rest }) => (
        <VerticalCheckableTagGroup
          {...renderProps({
            ...rest,
            onChange: (_value) => rest.onChange?.(_value, []),
          })}
        />
      )}
    </DropdownRenderSelect>
  );
};

export default memo(TagSelect);
