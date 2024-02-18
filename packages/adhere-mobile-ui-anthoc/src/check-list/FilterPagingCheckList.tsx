import type { CheckListItemProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import StaticPaging from '../StaticPaging';
import type { FilterPagingCheckListProps } from '../types';
import { DisplayNameInternal } from '../types';
import useListFilter from '../useListFilter';
import CheckList from './CheckList';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-paging-check-list';

const InternalFilterPagingCheckList = memo<FilterPagingCheckListProps>(
  ({
    className,
    style,
    filterWrapperClassName,
    filterWrapperStyle,
    bodyWrapperClassName,
    bodyWrapperStyle,
    filterProps,
    pagingProps,
    options,
    ...checkListProps
  }) => {
    return useListFilter<CheckListItemProps>({
      options: options ?? [],
      filterProps,
      wrapperClassName: classNames(selectorPrefix, className ?? ''),
      wrapperStyle: style,
      filterWrapperClassName: classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? ''),
      bodyWrapperClassName: classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? ''),
      filterWrapperStyle,
      bodyWrapperStyle,
      children: (_options) => (
        <StaticPaging<CheckListItemProps> options={_options} {...pagingProps}>
          <CheckList options={_options} {...checkListProps} />
        </StaticPaging>
      ),
    });
  },
);

const FilterPagingCheckList = InternalFilterPagingCheckList as DisplayNameInternal<
  typeof InternalFilterPagingCheckList
>;
FilterPagingCheckList.displayName = 'FilterPagingCheckList';

export default FilterPagingCheckList;
