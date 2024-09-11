import type { CheckListItemProps } from 'antd-mobile';
import React, { memo } from 'react';

import Paging from '../Paging';
import type { DisplayNameInternal, PagingCheckListProps } from '../types';
import CheckList from './CheckList';

const InternalPagingCheckList = memo<PagingCheckListProps>(
  ({ options, pagingProps, ...checkListProps }) => (
    <Paging<CheckListItemProps> {...pagingProps} options={options}>
      <CheckList {...checkListProps} />
    </Paging>
  ),
);

const PagingCheckList = InternalPagingCheckList as DisplayNameInternal<
  typeof InternalPagingCheckList
>;
PagingCheckList.displayName = 'PagingCheckList';

export default PagingCheckList;
