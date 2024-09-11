import React, { memo } from 'react';

import AutoCompleteCheckAllMultipleSelect from '../multiple-select/AutoCompleteCheckAllMultipleSelect';
import { AutoCompleteCheckAllCustomCheckboxSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import CustomCheckbox from './CustomCheckbox';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteCheckAllCustomCheckboxSelect
 * @param checkboxProps
 * @param children
 * @param props
 * @constructor
 */
const InternalAutoCompleteCheckAllCustomCheckboxSelect =
  memo<AutoCompleteCheckAllCustomCheckboxSelectProps>(({ checkboxProps, children, ...props }) => {
    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
    const renderProps = useRenderProps(checkboxProps);

    return (
      <AutoCompleteCheckAllMultipleSelect {...props}>
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
      </AutoCompleteCheckAllMultipleSelect>
    );
  });

const AutoCompleteCheckAllCustomCheckboxSelect =
  InternalAutoCompleteCheckAllCustomCheckboxSelect as DisplayNameInternal<
    typeof InternalAutoCompleteCheckAllCustomCheckboxSelect
  >;
AutoCompleteCheckAllCustomCheckboxSelect.displayName = 'AutoCompleteCheckAllCustomCheckboxSelect';

export default AutoCompleteCheckAllCustomCheckboxSelect;
