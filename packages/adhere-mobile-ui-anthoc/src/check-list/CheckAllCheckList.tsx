import React, { memo, useMemo } from 'react';

import ListCheckAll from '../ListCheckAll';
import type { CheckAllCheckListProps, DisplayNameInternal } from '../types';
import CheckList from './CheckList';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-check-all-check-list';

/**
 * CheckAllCheckList
 * @description 带有全选按钮的竖向CheckboxGroup
 * @constructor
 */
const InternalCheckAllCheckList = memo<CheckAllCheckListProps>(
  ({
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    checkAllBodyWrapperClassName,
    checkAllBodyWrapperStyle,
    renderCheckAll,
    checkAllLabel,
    // onCheckAllChange,
    ...checkListProps
  }) => {
    const childrenOrigin = useMemo(
      () => <CheckList multiple {...checkListProps} />,
      [checkListProps],
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
          onCheckAllChange: checkListProps.onChange,
          value: checkListProps.value ?? [],
          options: checkListProps?.options?.map((t) => t.value) ?? [],
          selectorPrefix,
          childrenOrigin,
        }}
      />
    );
  },
);

const CheckAllCheckList = InternalCheckAllCheckList as DisplayNameInternal<
  typeof InternalCheckAllCheckList
>;
CheckAllCheckList.displayName = 'CheckAllCheckList';

export default CheckAllCheckList;
