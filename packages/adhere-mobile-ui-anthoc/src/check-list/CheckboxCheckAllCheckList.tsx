import React, { memo, useMemo } from 'react';

import ListCheckAll from '../ListCheckAll';
import type { CheckboxCheckAllCheckListProps, DisplayNameInternal } from '../types';
import CheckboxCheckList from './CheckboxCheckList';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-check-box-check-all-check-list';

/**
 * CheckboxCheckAllCheckList
 * @description 带有全选按钮的竖向CheckboxGroup
 * @constructor
 */
const InternalCheckboxCheckAllCheckList = memo<CheckboxCheckAllCheckListProps>(
  ({
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    checkAllBodyWrapperClassName,
    checkAllBodyWrapperStyle,
    renderCheckAll,
    checkAllLabel,
    // onCheckAllChange,
    ...checkboxCheckListProps
  }) => {
    const childrenOrigin = useMemo(
      () => <CheckboxCheckList multiple {...checkboxCheckListProps} />,
      [checkboxCheckListProps],
    );

    return (
      <ListCheckAll
        {...{
          checkAllWrapperClassName,
          checkAllWrapperStyle,
          checkAllBodyWrapperClassName,
          checkAllBodyWrapperStyle,
          renderCheckAll,
          checkAllLabel,
          onCheckAllChange: checkboxCheckListProps.onChange,
          value: checkboxCheckListProps.value ?? [],
          options: checkboxCheckListProps?.options?.map((t) => t.value) ?? [],
          selectorPrefix,
          childrenOrigin,
        }}
      />
    );
  },
);

const CheckboxCheckAllCheckList = InternalCheckboxCheckAllCheckList as DisplayNameInternal<
  typeof InternalCheckboxCheckAllCheckList
>;
CheckboxCheckAllCheckList.displayName = 'CheckboxCheckAllCheckList';

export default CheckboxCheckAllCheckList;
