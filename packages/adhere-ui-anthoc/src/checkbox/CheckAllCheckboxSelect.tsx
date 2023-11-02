import React, { memo } from 'react';
import type { FC } from 'react';

import CheckAllMultipleSelect from '../multiple-select/CheckAllMultipleSelect';
import type { CheckAllCheckboxSelectProps } from '../types';
import VerticalCheckbox from './VerticalCheckbox';
import useRenderProps from './useRenderProps';

/**
 * CheckAllCheckboxSelect
 * @param checkboxProps
 * @param props
 * @constructor
 */
const CheckAllCheckboxSelect: FC<CheckAllCheckboxSelectProps> = ({ checkboxProps, ...props }) => {
  const renderProps = useRenderProps(checkboxProps);

  return (
    <CheckAllMultipleSelect {...props}>
      {({ originNode, onChange, ...rest }) => (
        <VerticalCheckbox
          {...renderProps({
            ...rest,
            onChange: (_value) => onChange?.(_value, []),
          })}
        />
      )}
    </CheckAllMultipleSelect>
  );
};

export default memo(CheckAllCheckboxSelect);
