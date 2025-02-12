import React, { memo } from 'react';

import usePaging from '../list/usePaging';
import type { DisplayNameInternal, RadioPagingTreeTableProps } from '../types';
import RadioTreeTable from './RadioTreeTable';

/**
 * RadioPagingTreeTable
 * @description 分页单选的Table
 * @param value
 * @param totalCount
 * @param paging
 * @param onPagingChange
 * @param onPagingShowSizeChange
 * @param props
 * @constructor
 */
const InternalRadioPagingTreeTable = memo<RadioPagingTreeTableProps>(
  ({
    totalCount,
    paging,
    onPagingChange,
    onPagingShowSizeChange,
    defaultLimit,
    ...radioTableProps
  }) => {
    const pagingProps = usePaging({
      defaultLimit: defaultLimit ?? 10,
      paging,
      totalCount,
      onPagingShowSizeChange,
      onPagingChange,
    });

    return <RadioTreeTable pagination={pagingProps} {...(radioTableProps ?? {})} />;
  },
);

const RadioPagingTreeTable = InternalRadioPagingTreeTable as DisplayNameInternal<
  typeof InternalRadioPagingTreeTable
>;
RadioPagingTreeTable.displayName = 'RadioPagingTreeTable';

export default RadioPagingTreeTable;
