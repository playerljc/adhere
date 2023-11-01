import React, { memo } from 'react';
import type { FC } from 'react';

import CheckAllMultipleSelect from '../multiple-select/CheckAllMultipleSelect';
import type { CheckAllCustomCheckboxSelectProps } from '../types';
import CustomCheckbox from './CustomCheckbox';
import useRenderProps from './useRenderProps';

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
  const renderProps = useRenderProps(checkboxProps);

  return (
    <CheckAllMultipleSelect {...props}>
      {({ originNode, ...rest }) => (
        <CustomCheckbox
          {...renderProps({
            ...rest,
            onChange: (_value) => rest.onChange?.(_value, []),
          })}
        >
          {children}
        </CustomCheckbox>
      )}
    </CheckAllMultipleSelect>
  );
};

export default memo(CheckAllCustomCheckboxSelect);
