import React, { memo } from 'react';

import CheckAllMultipleSelect from '../multiple-select/CheckAllMultipleSelect';
import type { CheckAllCheckboxSelectProps, DisplayNameInternal } from '../types';
import VerticalCheckbox from './VerticalCheckbox';
import useRenderProps from './useRenderProps';

/**
 * CheckAllCheckboxSelect
 * @param checkboxProps
 * @param props
 * @constructor
 */
const InternalCheckAllCheckboxSelect = memo<CheckAllCheckboxSelectProps>(
  ({ checkboxProps, ...props }) => {
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
  },
);

const CheckAllCheckboxSelect = InternalCheckAllCheckboxSelect as DisplayNameInternal<
  typeof InternalCheckAllCheckboxSelect
>;
CheckAllCheckboxSelect.displayName = 'CheckAllCheckboxSelect';

export default CheckAllCheckboxSelect;
