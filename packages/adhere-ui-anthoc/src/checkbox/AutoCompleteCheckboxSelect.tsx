import React, { memo } from 'react';
import type { FC } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import { AutoCompleteCheckboxSelectProps } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import VerticalCheckbox from './VerticalCheckbox';
import useCheckboxRenderProps from './useRenderProps';

/**
 * AutoCompleteCheckboxSelect
 * @param checkboxProps
 * @param props
 * @constructor
 */
const AutoCompleteCheckboxSelect: FC<AutoCompleteCheckboxSelectProps> = ({
  checkboxProps,
  ...props
}) => {
  const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
  const renderProps = useCheckboxRenderProps(checkboxProps);

  return (
    <AutoCompleteMultipleSelect {...props}>
      {({ originNode, loading, ...rest }) => (
        <>
          {loading && fetchLoading}
          {!loading && <VerticalCheckbox {...renderProps(rest)} />}
        </>
      )}
    </AutoCompleteMultipleSelect>
  );
};

export default memo(AutoCompleteCheckboxSelect);
