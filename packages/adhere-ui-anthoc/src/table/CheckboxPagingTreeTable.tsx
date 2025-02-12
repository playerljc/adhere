import React, { memo } from 'react';

import usePaging from '../list/usePaging';
import type { CheckboxPagingTreeTableProps, DisplayNameInternal } from '../types';
import CheckboxTreeTable from './CheckboxTreeTable';

/**
 * CheckboxPagingTreeTable
 * @description 分页多选的Table
 * @param value
 * @param totalCount
 * @param paging
 * @param onPagingChange
 * @param onPagingShowSizeChange
 * @param props
 * @constructor
 */
const InternalCheckboxPagingTreeTable = memo<CheckboxPagingTreeTableProps>(
  ({
    totalCount,
    paging,
    onPagingChange,
    onPagingShowSizeChange,
    defaultLimit,
    ...checkboxTableProps
  }) => {
    const pagingProps = usePaging({
      defaultLimit: defaultLimit ?? 10,
      paging,
      totalCount,
      onPagingShowSizeChange,
      onPagingChange,
    });

    return <CheckboxTreeTable pagination={pagingProps} {...(checkboxTableProps ?? {})} />;
  },
);

const CheckboxPagingTreeTable = InternalCheckboxPagingTreeTable as DisplayNameInternal<
  typeof InternalCheckboxPagingTreeTable
>;
CheckboxPagingTreeTable.displayName = 'CheckboxPagingTreeTable';

export default CheckboxPagingTreeTable;
