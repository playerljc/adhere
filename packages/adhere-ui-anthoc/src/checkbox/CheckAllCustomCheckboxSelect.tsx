import React, { memo } from 'react';
import type { FC } from 'react';

import CheckAllMultipleSelect from '../multiple-select/CheckAllMultipleSelect';
import type { CheckAllCustomCheckboxSelectProps } from '../types';
import CustomCheckbox from './CustomCheckbox';
import useCheckboxRenderProps from './useRenderProps';

/**
 * CheckAllCustomCheckboxSelect
 * @param checkboxProps
 * @param children
 * @param props
 * @constructor
 */
const CheckAllCustomCheckboxSelect: FC<CheckAllCustomCheckboxSelectProps> = ({
  checkboxProps,
  children,
  ...props
}) => {
  const renderProps = useCheckboxRenderProps(checkboxProps);

  return (
    <CheckAllMultipleSelect {...props}>
      {({ originNode, ...rest }) => (
        <CustomCheckbox
          {...renderProps({
            ...rest,
          })}
        >
          {children}
        </CustomCheckbox>
      )}
    </CheckAllMultipleSelect>
  );
};

export default memo(CheckAllCustomCheckboxSelect);
