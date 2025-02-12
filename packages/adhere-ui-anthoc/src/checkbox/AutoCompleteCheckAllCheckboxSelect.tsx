import React, { memo } from 'react';

import AutoCompleteCheckAllMultipleSelect from '../multiple-select/AutoCompleteCheckAllMultipleSelect';
import type { AutoCompleteCheckAllCheckboxSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import VerticalCheckbox from './VerticalCheckbox';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteCheckAllCheckboxSelect
 * @param checkboxProps
 * @param props
 * @constructor
 */
const InternalAutoCompleteCheckAllCheckboxSelect = memo<AutoCompleteCheckAllCheckboxSelectProps>(
  ({ checkboxProps, ...props }) => {
    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
    const renderProps = useRenderProps(checkboxProps);

    return (
      <AutoCompleteCheckAllMultipleSelect {...props}>
        {({ originNode, loading, ...rest }) => (
          <>
            {loading && fetchLoading}
            {!loading && (
              <VerticalCheckbox
                {...renderProps({
                  ...rest,
                  onChange: (_value) => rest.onChange?.(_value, []),
                })}
              />
            )}
          </>
        )}
      </AutoCompleteCheckAllMultipleSelect>
    );
  },
);

const AutoCompleteCheckAllCheckboxSelect =
  InternalAutoCompleteCheckAllCheckboxSelect as DisplayNameInternal<
    typeof InternalAutoCompleteCheckAllCheckboxSelect
  >;
AutoCompleteCheckAllCheckboxSelect.displayName = 'AutoCompleteCheckAllCheckboxSelect';

export default AutoCompleteCheckAllCheckboxSelect;
