import React, { memo } from 'react';
import type { FC } from 'react';

import AutoCompleteCheckAllMultipleSelect from '../multiple-select/AutoCompleteCheckAllMultipleSelect';
import type { AutoCompleteCheckAllCheckboxSelectProps } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import VerticalCheckbox from './VerticalCheckbox';
import useCheckboxRenderProps from './useRenderProps';

/**
 * AutoCompleteCheckAllCheckboxSelect
 * @param checkboxProps
 * @param props
 * @constructor
 */
const AutoCompleteCheckAllCheckboxSelect: FC<AutoCompleteCheckAllCheckboxSelectProps> = ({
  checkboxProps,
  ...props
}) => {
  const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
  const renderProps = useCheckboxRenderProps(checkboxProps);

  return (
    <AutoCompleteCheckAllMultipleSelect {...props}>
      {({ originNode, loading, ...rest }) => (
        <>
          {loading && fetchLoading}
          {!loading && <VerticalCheckbox {...renderProps(rest)} />}
        </>
      )}
    </AutoCompleteCheckAllMultipleSelect>
  );
};

export default memo(AutoCompleteCheckAllCheckboxSelect);
