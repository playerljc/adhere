import React, { memo } from 'react';
import type { FC } from 'react';

import AutoCompleteCheckAllMultipleSelect from '../multiple-select/AutoCompleteCheckAllMultipleSelect';
import { AutoCompleteCheckAllCustomCheckboxSelectProps } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import CustomCheckbox from './CustomCheckbox';
import useCheckboxRenderProps from './useRenderProps';

/**
 * AutoCompleteCheckAllCustomCheckboxSelect
 * @param checkboxProps
 * @param children
 * @param props
 * @constructor
 */
const AutoCompleteCheckAllCustomCheckboxSelect: FC<
  AutoCompleteCheckAllCustomCheckboxSelectProps
> = ({ checkboxProps, children, ...props }) => {
  const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
  const renderProps = useCheckboxRenderProps(checkboxProps);

  return (
    <AutoCompleteCheckAllMultipleSelect {...props}>
      {({ originNode, loading, ...rest }) => (
        <>
          {loading && fetchLoading}
          {!loading && <CustomCheckbox {...renderProps(rest)}>{children}</CustomCheckbox>}
        </>
      )}
    </AutoCompleteCheckAllMultipleSelect>
  );
};

export default memo(AutoCompleteCheckAllCustomCheckboxSelect);
