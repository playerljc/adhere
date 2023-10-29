import React, { memo } from 'react';
import type { FC } from 'react';

import CheckAllMultipleSelect from '../multiple-select/CheckAllMultipleSelect';
import type { CheckAllCheckboxSelectProps } from '../types';
import VerticalCheckbox from './VerticalCheckbox';
import useCheckboxRenderProps from './useRenderProps';

/**
 * CheckAllCheckboxSelect
 * @param checkboxProps
 * @param props
 * @constructor
 */
const CheckAllCheckboxSelect: FC<CheckAllCheckboxSelectProps> = ({ checkboxProps, ...props }) => {
  const renderProps = useCheckboxRenderProps(checkboxProps);

  return (
    <CheckAllMultipleSelect {...props}>
      {({ originNode, ...rest }) => <VerticalCheckbox {...renderProps(rest)} />}
    </CheckAllMultipleSelect>
  );
};

export default memo(CheckAllCheckboxSelect);
