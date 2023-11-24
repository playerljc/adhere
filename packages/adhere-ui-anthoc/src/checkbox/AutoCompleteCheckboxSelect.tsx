import React, { memo } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import { AutoCompleteCheckboxSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import VerticalCheckbox from './VerticalCheckbox';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteCheckboxSelect
 * @param checkboxProps
 * @param props
 * @constructor
 */
const InternalAutoCompleteCheckboxSelect = memo<AutoCompleteCheckboxSelectProps>(
  ({ checkboxProps, ...props }) => {
    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
    const renderProps = useRenderProps(checkboxProps);

    return (
      <AutoCompleteMultipleSelect {...props}>
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
      </AutoCompleteMultipleSelect>
    );
  },
);

const AutoCompleteCheckboxSelect = InternalAutoCompleteCheckboxSelect as DisplayNameInternal<
  typeof InternalAutoCompleteCheckboxSelect
>;
AutoCompleteCheckboxSelect.displayName = 'AutoCompleteCheckboxSelect';

export default AutoCompleteCheckboxSelect;
