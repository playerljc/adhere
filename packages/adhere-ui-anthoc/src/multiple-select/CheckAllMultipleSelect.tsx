import type { FC } from 'react';
import React, { memo } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { CheckAllSelectProps } from '../types';
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
const CheckAllSelect: FC<CheckAllSelectProps> = ({
  children,
  checkAllWrapperClassName,
  checkAllWrapperStyle,
  dropdownWrapperClassName,
  dropdownWrapperStyle,
  ...props
}) => {
  const { renderProps, currentOriginNode, dropdownRenderElement } = useCheckAllMultiple({
    children,
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    dropdownWrapperClassName,
    dropdownWrapperStyle,
  });

  return (
    <DropdownRenderSelect
      {...props}
      mode="multiple"
      filterOption={() => dropdownRenderElement === currentOriginNode}
    >
      {(arg) => renderProps(arg)}
    </DropdownRenderSelect>
  );
};

export default memo(CheckAllSelect);
