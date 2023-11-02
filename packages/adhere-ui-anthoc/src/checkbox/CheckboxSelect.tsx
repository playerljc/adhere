import React, { memo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { CheckboxSelectProps } from '../types';
import VerticalCheckbox from './VerticalCheckbox';
import useRenderProps from './useRenderProps';

/**
 * CheckboxSelect
 * @param checkboxProps
 * @param props
 * @constructor
 */
const CheckboxSelect: FC<CheckboxSelectProps> = ({ checkboxProps, ...props }) => {
  const renderProps = useRenderProps(checkboxProps);

  return (
    <DropdownRenderSelect {...props} mode="multiple">
      {({ originNode, ...rest }) => (
        <VerticalCheckbox
          {...renderProps({
            ...rest,
            onChange: (_value) => rest?.onChange?.(_value, []),
          })}
        />
      )}
    </DropdownRenderSelect>
  );
};

export default memo(CheckboxSelect);
