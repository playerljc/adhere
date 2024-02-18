import type { CheckListItemProps } from 'antd-mobile';
import React, { memo } from 'react';

import StaticPaging from '../StaticPaging';
import type { DisplayNameInternal, PagingCheckListProps } from '../types';
import CheckList from './CheckList';

const InternalPagingCheckList = memo<PagingCheckListProps>(
  ({ options, pagingProps, ...checkListProps }) => (
    <StaticPaging<CheckListItemProps> {...pagingProps} options={options}>
      <CheckList {...checkListProps} />
    </StaticPaging>
  ),
);

const PagingCheckList = InternalPagingCheckList as DisplayNameInternal<
  typeof InternalPagingCheckList
>;
PagingCheckList.displayName = 'PagingCheckList';

export default PagingCheckList;
