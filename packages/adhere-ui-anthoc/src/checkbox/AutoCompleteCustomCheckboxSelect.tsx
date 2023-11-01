import React, { memo } from 'react';
import type { FC } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import { AutoCompleteCustomCheckboxSelectProps } from '../types';
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
const AutoCompleteCustomCheckboxSelect: FC<AutoCompleteCustomCheckboxSelectProps> = ({
  checkboxProps,
  children,
  ...props
}) => {
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
};

export default memo(AutoCompleteCustomCheckboxSelect);
