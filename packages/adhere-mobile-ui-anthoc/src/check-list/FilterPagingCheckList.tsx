import type { CheckListItemProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import Paging from '../Paging';
import type { FilterPagingCheckListProps } from '../types';
import { DisplayNameInternal } from '../types';
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
    renderEmpty,
    filterProps,
    pagingProps,
    options,
    ...checkListProps
  }) => (
    <ListFilter<CheckListItemProps>
      options={options ?? []}
      filterProps={filterProps}
      wrapperClassName={classNames(selectorPrefix, className ?? '')}
      wrapperStyle={style ?? {}}
      filterWrapperClassName={classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? '')}
      bodyWrapperClassName={classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? '')}
      filterWrapperStyle={filterWrapperStyle ?? {}}
      bodyWrapperStyle={bodyWrapperStyle ?? {}}
      renderEmpty={renderEmpty}
      children={(_options) => (
        <Paging<CheckListItemProps> {...pagingProps} options={_options} isLocal>
          <CheckList {...checkListProps} />
        </Paging>
      )}
    />
  ),
);

const FilterPagingCheckList = InternalFilterPagingCheckList as DisplayNameInternal<
  typeof InternalFilterPagingCheckList
>;
FilterPagingCheckList.displayName = 'FilterPagingCheckList';

export default FilterPagingCheckList;
