import React, { memo } from 'react';

import CheckAllMultipleSelect from '../multiple-select/CheckAllMultipleSelect';
import type { CheckAllCustomCheckboxSelectProps, DisplayNameInternal } from '../types';
import CustomCheckbox from './CustomCheckbox';
import useRenderProps from './useRenderProps';

/**
 * CheckAllCustomCheckboxSelect
 * @param checkboxProps
 * @param children
 * @param props
 * @constructor
 */
const InternalCheckAllCustomCheckboxSelect = memo<CheckAllCustomCheckboxSelectProps>(
  ({ checkboxProps, children, ...props }) => {
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
  },
);

const CheckAllCustomCheckboxSelect = InternalCheckAllCustomCheckboxSelect as DisplayNameInternal<
  typeof InternalCheckAllCustomCheckboxSelect
>;
CheckAllCustomCheckboxSelect.displayName = 'CheckAllCustomCheckboxSelect';

export default CheckAllCustomCheckboxSelect;
