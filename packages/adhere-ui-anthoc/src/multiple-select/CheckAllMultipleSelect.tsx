import React, { memo } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { CheckAllSelectProps, DisplayNameInternal } from '../types';
import useCheckAllMultiple from './useCheckAllMultiple';

/**
 * CheckAllSelect
 * @description 带有全选按钮的Select，全选按钮也是使用DropdownRender实现
 * @param children
 * @param checkAllWrapperClassName
 * @param checkAllWrapperStyle
 * @param dropdownWrapperClassName
 * @param dropdownWrapperStyle
 * @param props
 * @constructor
 */
const InternalCheckAllSelect = memo<CheckAllSelectProps>(
  ({
    children,
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    dropdownWrapperClassName,
    dropdownWrapperStyle,
    render,
    ...props
  }) => {
    const { renderProps, currentOriginNode, dropdownRenderElement } = useCheckAllMultiple({
      children,
      checkAllWrapperClassName,
      checkAllWrapperStyle,
      dropdownWrapperClassName,
      dropdownWrapperStyle,
      render,
    });

    return (
      <DropdownRenderSelect
        {...props}
        mode="multiple"
        filterOption={() => dropdownRenderElement === currentOriginNode}
      >
        {(arg) =>
          renderProps({
            ...arg,
            onChange: (_values) => {
              arg.onChange?.(_values, []);
            },
          })
        }
      </DropdownRenderSelect>
    );
  },
);

const CheckAllSelect = InternalCheckAllSelect as DisplayNameInternal<typeof InternalCheckAllSelect>;
CheckAllSelect.displayName = 'CheckAllSelect';

export default CheckAllSelect;
