import React, { memo } from 'react';

import type { CheckboxPagingListProps, DisplayNameInternal } from '../types';
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
const InternalCheckboxPagingList = memo<CheckboxPagingListProps>(
  ({ totalCount, paging, onPagingChange, onPagingShowSizeChange, defaultLimit, ...props }) => {
    const pagingProps = usePaging({
      defaultLimit: defaultLimit ?? 10,
      paging,
      totalCount,
      onPagingShowSizeChange,
      onPagingChange,
    });

    return <CheckboxList pagination={pagingProps} {...props} />;
  },
);

const CheckboxPagingList = InternalCheckboxPagingList as DisplayNameInternal<
  typeof InternalCheckboxPagingList
>;
CheckboxPagingList.displayName = 'CheckboxPagingList';

export default CheckboxPagingList;
