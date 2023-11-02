import React, { memo } from 'react';
import type { FC } from 'react';

import type { CheckboxPagingListProps } from '../types';
import CheckboxList from './CheckboxList';
import usePaging from './usePaging';

/**
 * CheckboxPagingList
 * @description 分页多选的List
 * @param value
 * @param totalCount
 * @param paging
 * @param onPagingChange
 * @param onPagingShowSizeChange
 * @param props
 * @constructor
 */
const CheckboxPagingList: FC<CheckboxPagingListProps> = ({
  totalCount,
  paging,
  onPagingChange,
  onPagingShowSizeChange,
  defaultLimit,
  ...props
}) => {
  const pagingProps = usePaging({
    defaultLimit: defaultLimit ?? 10,
    paging,
    totalCount,
    onPagingShowSizeChange,
    onPagingChange,
  });

  return <CheckboxList pagination={pagingProps} {...props} />;
};

export default memo(CheckboxPagingList);
