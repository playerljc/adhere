import React, { memo } from 'react';

import usePaging from '../list/usePaging';
import type { CheckboxPagingTableProps, DisplayNameInternal } from '../types';
import CheckboxTable from './CheckboxTable';

/**
 * CheckboxPagingTable
 * @description 分页多选的Table
 * @param value
 * @param totalCount
 * @param paging
 * @param onPagingChange
 * @param onPagingShowSizeChange
 * @param props
 * @constructor
 */
const InternalCheckboxPagingTable = memo<CheckboxPagingTableProps>(
  ({ totalCount, paging, onPagingChange, onPagingShowSizeChange, defaultLimit, ...props }) => {
    const pagingProps = usePaging({
      defaultLimit: defaultLimit ?? 10,
      paging,
      totalCount,
      onPagingShowSizeChange,
      onPagingChange,
    });

    return <CheckboxTable pagination={pagingProps} {...props} />;
  },
);

const CheckboxPagingTable = InternalCheckboxPagingTable as DisplayNameInternal<
  typeof InternalCheckboxPagingTable
>;
CheckboxPagingTable.displayName = 'CheckboxPagingTable';

export default CheckboxPagingTable;
