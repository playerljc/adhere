import type { FC } from 'react';
import React, { memo } from 'react';

import AutoComplete from '../select/AutoCompleteSelect';
import type { AutoCompleteCheckAllMultipleSelectProps } from '../types';
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
const AutoCompleteCheckAllMultipleSelect: FC<AutoCompleteCheckAllMultipleSelectProps> = ({
  children,
  checkAllWrapperClassName,
  checkAllWrapperStyle,
  dropdownWrapperClassName,
  dropdownWrapperStyle,
  ...props
}) => {
  const { renderProps } = useCheckAllMultiple({
    children,
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    dropdownWrapperClassName,
    dropdownWrapperStyle,
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
};

export default memo(AutoCompleteCheckAllMultipleSelect);
