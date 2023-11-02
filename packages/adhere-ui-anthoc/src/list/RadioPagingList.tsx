import React, { memo } from 'react';
import type { FC } from 'react';

import type { RadioPagingListProps } from '../types';
import RadioList from './RadioList';
import usePaging from './usePaging';

/**
 * RadioPagingList
 * @description 分页单选的List
 * @param value
 * @param totalCount
 * @param paging
 * @param onPagingChange
 * @param onPagingShowSizeChange
 * @param props
 * @constructor
 */
const RadioPagingList: FC<RadioPagingListProps> = ({
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

  return <RadioList pagination={pagingProps} {...props} />;
};

export default memo(RadioPagingList);
