import React, { memo } from 'react';

import type { DisplayNameInternal, RadioPagingListProps } from '../types';
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
const InternalRadioPagingList = memo<RadioPagingListProps>(
  ({ totalCount, paging, onPagingChange, onPagingShowSizeChange, defaultLimit, ...props }) => {
    const pagingProps = usePaging({
      defaultLimit: defaultLimit ?? 10,
      paging,
      totalCount,
      onPagingShowSizeChange,
      onPagingChange,
    });

    return <RadioList pagination={pagingProps} {...props} />;
  },
);

const RadioPagingList = InternalRadioPagingList as DisplayNameInternal<
  typeof InternalRadioPagingList
>;
RadioPagingList.displayName = 'RadioPagingList';

export default RadioPagingList;
