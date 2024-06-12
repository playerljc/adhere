import type { CheckListItemProps } from 'antd-mobile';
import React, { memo } from 'react';

import Paging from '../Paging';
import type { DisplayNameInternal, PagingCheckboxCheckListProps } from '../types';
import CheckboxCheckList from './CheckboxCheckList';

const InternalPagingCheckboxCheckList = memo<PagingCheckboxCheckListProps>(
  ({ options, pagingProps, ...checkboxCheckListProps }) => {
    return (
      <Paging<CheckListItemProps> {...pagingProps} options={options}>
        <CheckboxCheckList {...checkboxCheckListProps} />
      </Paging>
    );
  },
);

const PagingCheckboxCheckList = InternalPagingCheckboxCheckList as DisplayNameInternal<
  typeof InternalPagingCheckboxCheckList
>;
PagingCheckboxCheckList.displayName = 'PagingCheckboxCheckList';

export default PagingCheckboxCheckList;
