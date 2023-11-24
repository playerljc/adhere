import React, { memo } from 'react';

import usePaging from '../list/usePaging';
import type { DisplayNameInternal, RadioPagingTableProps } from '../types';
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
const InternalRadioPagingTable = memo<RadioPagingTableProps>(
  ({ totalCount, paging, onPagingChange, onPagingShowSizeChange, defaultLimit, ...props }) => {
    const pagingProps = usePaging({
      defaultLimit: defaultLimit ?? 10,
      paging,
      totalCount,
      onPagingShowSizeChange,
      onPagingChange,
    });

    return <RadioTable pagination={pagingProps} {...props} />;
  },
);

const RadioPagingTable = InternalRadioPagingTable as DisplayNameInternal<
  typeof InternalRadioPagingTable
>;
RadioPagingTable.displayName = 'RadioPagingTable';

export default RadioPagingTable;
