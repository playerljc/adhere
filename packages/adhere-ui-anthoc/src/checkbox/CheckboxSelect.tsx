import React, { memo } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { CheckboxSelectProps, DisplayNameInternal } from '../types';
import VerticalCheckbox from './VerticalCheckbox';
import useRenderProps from './useRenderProps';

/**
 * CheckboxSelect
 * @param checkboxProps
 * @param props
 * @constructor
 */
const InternalCheckboxSelect = memo<CheckboxSelectProps>(({ checkboxProps, ...props }) => {
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
});

const CheckboxSelect = InternalCheckboxSelect as DisplayNameInternal<typeof InternalCheckboxSelect>;
CheckboxSelect.displayName = 'CheckboxSelect';

export default CheckboxSelect;
