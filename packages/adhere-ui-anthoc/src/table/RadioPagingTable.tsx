import React, { memo } from 'react';
import type { FC } from 'react';

import usePaging from '../list/usePaging';
import type { RadioPagingTableProps } from '../types';
import RadioTable from './RadioTable';

/**
 * RadioPagingTable
 * @description 分页单选的Table
 * @param value
 * @param totalCount
 * @param paging
 * @param onPagingChange
 * @param onPagingShowSizeChange
 * @param props
 * @constructor
 */
const RadioPagingTable: FC<RadioPagingTableProps> = ({
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

  return <RadioTable pagination={pagingProps} {...props} />;
};

export default memo(RadioPagingTable);
