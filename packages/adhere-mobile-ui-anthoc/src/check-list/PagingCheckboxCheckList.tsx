import type { CheckListItemProps } from 'antd-mobile';
import React, { memo } from 'react';

import StaticPaging from '../StaticPaging';
import type { DisplayNameInternal, PagingCheckboxCheckListProps } from '../types';
import CheckboxCheckList from './CheckboxCheckList';

const InternalPagingCheckboxCheckList = memo<PagingCheckboxCheckListProps>(
  ({ options, pagingProps, ...checkboxCheckListProps }) => (
    <StaticPaging<CheckListItemProps> options={options} {...pagingProps}>
      <CheckboxCheckList options={options} {...checkboxCheckListProps} />
    </StaticPaging>
  ),
);

const PagingCheckboxCheckList = InternalPagingCheckboxCheckList as DisplayNameInternal<
  typeof InternalPagingCheckboxCheckList
>;
PagingCheckboxCheckList.displayName = 'PagingCheckboxCheckList';

export default PagingCheckboxCheckList;
