import React, { memo } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import { AutoCompleteCustomCheckboxSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import CustomCheckbox from './CustomCheckbox';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteCustomCheckboxSelect
 * @param checkboxProps
 * @param children
 * @param props
 * @constructor
 */
const InternalAutoCompleteCustomCheckboxSelect = memo<AutoCompleteCustomCheckboxSelectProps>(
  ({ checkboxProps, children, ...props }) => {
    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
    const renderProps = useRenderProps(checkboxProps);

    return (
      <AutoCompleteMultipleSelect {...props}>
        {({ originNode, loading, ...rest }) => (
          <>
            {loading && fetchLoading}
            {!loading && (
              <CustomCheckbox
                {...renderProps({
                  ...rest,
                  onChange: (_value) => rest.onChange?.(_value, []),
                })}
              >
                {children}
              </CustomCheckbox>
            )}
          </>
        )}
      </AutoCompleteMultipleSelect>
    );
  },
);

const AutoCompleteCustomCheckboxSelect =
  InternalAutoCompleteCustomCheckboxSelect as DisplayNameInternal<
    typeof InternalAutoCompleteCustomCheckboxSelect
  >;
AutoCompleteCustomCheckboxSelect.displayName = 'AutoCompleteCustomCheckboxSelect';

export default AutoCompleteCustomCheckboxSelect;
