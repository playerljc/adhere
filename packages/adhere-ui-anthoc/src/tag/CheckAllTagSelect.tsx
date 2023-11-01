import React, { memo } from 'react';
import type { FC } from 'react';

import CheckAllMultipleSelect from '../multiple-select/CheckAllMultipleSelect';
import type { CheckAllTagSelectProps } from '../types';
import VerticalCheckableTagGroup from './VerticalCheckableTagGroup';
import useRenderProps from './useRenderProps';

/**
 * CheckAllTagSelect
 * @param tagProps
 * @param props
 * @constructor
 */
const CheckAllTagSelect: FC<CheckAllTagSelectProps> = ({ tagProps, ...props }) => {
  const renderProps = useRenderProps(tagProps, 'multiple');

  return (
    <CheckAllMultipleSelect {...props} mode="multiple">
      {({ originNode, ...rest }) => (
        <VerticalCheckableTagGroup
          {...renderProps({
            ...rest,
            onChange: (_value) => rest.onChange?.(_value, []),
          })}
        />
      )}
    </CheckAllMultipleSelect>
  );
};

export default memo(CheckAllTagSelect);
