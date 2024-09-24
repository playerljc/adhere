import React from 'react';
import type { CheckAllSelectProps, DisplayNameInternal } from '../types';
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
declare const InternalCheckAllSelect: React.NamedExoticComponent<CheckAllSelectProps>;
declare const CheckAllSelect: DisplayNameInternal<typeof InternalCheckAllSelect>;
export default CheckAllSelect;
