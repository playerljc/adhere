import React, { memo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { CustomCheckboxSelectProps } from '../types';
import CustomCheckbox from './CustomCheckbox';
import useRenderProps from './useRenderProps';

/**
 * CustomCheckboxSelect
 * @param checkboxProps
 * @param children
 * @param props
 * @constructor
 */
const CustomCheckboxSelect: FC<CustomCheckboxSelectProps> = ({
  checkboxProps,
  children,
  ...props
}) => {
  const renderProps = useRenderProps(checkboxProps);

  return (
    <DropdownRenderSelect {...props} mode="multiple">
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
    </DropdownRenderSelect>
  );
};

export default memo(CustomCheckboxSelect);
