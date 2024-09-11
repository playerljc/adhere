import React, { memo } from 'react';

import AutoComplete from '../select/AutoCompleteSelect';
import type { AutoCompleteCheckAllMultipleSelectProps, DisplayNameInternal } from '../types';
import useCheckAllMultiple from './useCheckAllMultiple';

/**
 * AutoCompleteCheckAllMultipleSelect
 * @description 带有全选按钮的Select，全选按钮也是使用DropdownRender实现
 * @param children
 * @param checkAllWrapperClassName
 * @param checkAllWrapperStyle
 * @param dropdownWrapperClassName
 * @param dropdownWrapperStyle
 * @param props
 * @constructor
 */
const InternalAutoCompleteCheckAllMultipleSelect = memo<AutoCompleteCheckAllMultipleSelectProps>(
  ({
    children,
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    dropdownWrapperClassName,
    dropdownWrapperStyle,
    render,
    ...props
  }) => {
    const { renderProps } = useCheckAllMultiple({
      children,
      checkAllWrapperClassName,
      checkAllWrapperStyle,
      dropdownWrapperClassName,
      dropdownWrapperStyle,
      render,
      renderLoading: props.renderLoading,
    });

    return (
      <AutoComplete {...props} mode="multiple">
        {(arg) =>
          renderProps({
            ...arg,
            onChange: (_values) => {
              arg.onChange?.(_values, []);
            },
          })
        }
      </AutoComplete>
    );
  },
);

const AutoCompleteCheckAllMultipleSelect =
  InternalAutoCompleteCheckAllMultipleSelect as DisplayNameInternal<
    typeof InternalAutoCompleteCheckAllMultipleSelect
  >;
AutoCompleteCheckAllMultipleSelect.displayName = 'AutoCompleteCheckAllMultipleSelect';

export default AutoCompleteCheckAllMultipleSelect;
