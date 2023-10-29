import React, { memo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { CheckboxSelectProps } from '../types';
import VerticalCheckbox from './VerticalCheckbox';
import useCheckboxRenderProps from './useRenderProps';

/**
 * CheckboxSelect
 * @param checkboxProps
 * @param props
 * @constructor
 */
const CheckboxSelect: FC<CheckboxSelectProps> = ({ checkboxProps, ...props }) => {
  const renderProps = useCheckboxRenderProps(checkboxProps);

  return (
    <DropdownRenderSelect {...props} mode="multiple">
      {({ originNode, ...rest }) => <VerticalCheckbox {...renderProps(rest)} />}
    </DropdownRenderSelect>
  );
};

export default memo(CheckboxSelect);
