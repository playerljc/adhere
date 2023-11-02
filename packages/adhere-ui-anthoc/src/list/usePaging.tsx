import React from 'react';

import { UsePaging } from '../types';

/**
 * usePaging
 * @param totalCount
 * @param paging
 * @param onPagingChange
 * @param onPagingShowSizeChange
 * @param defaultLimit
 */
const usePaging: UsePaging = ({
  totalCount,
  paging,
  onPagingChange,
  onPagingShowSizeChange,
  defaultLimit,
}) => {
  const defaultPageSizeOptions = [10, 20, 50, 100];
  if (!defaultPageSizeOptions.includes(defaultLimit)) {
    defaultPageSizeOptions.push(defaultLimit);
  }

  return {
    current: paging.page,
    pageSize: paging.limit,
    total: totalCount,
    showSizeChanger: true,
    onChange: onPagingChange,
    onShowSizeChange: onPagingShowSizeChange,
    pageSizeOptions: defaultPageSizeOptions.sort((t1, t2) => t1 - t2),
  };
};

export default usePaging;
