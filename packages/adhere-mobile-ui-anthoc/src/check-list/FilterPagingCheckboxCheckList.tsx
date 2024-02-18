import type { CheckListItemProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import StaticPaging from '../StaticPaging';
import type { FilterPagingCheckboxCheckListProps } from '../types';
import { DisplayNameInternal } from '../types';
import CheckboxCheckList from './CheckboxCheckList';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-paging-check-box-check-list';

const InternalFilterPagingCheckboxCheckList = memo<FilterPagingCheckboxCheckListProps>(
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
    ...checkboxCheckListProps
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
        <StaticPaging<CheckListItemProps> {...pagingProps} options={_options}>
          <CheckboxCheckList {...checkboxCheckListProps} />
        </StaticPaging>
      )}
    />
  ),
);

const FilterPagingCheckboxCheckList = InternalFilterPagingCheckboxCheckList as DisplayNameInternal<
  typeof InternalFilterPagingCheckboxCheckList
>;
FilterPagingCheckboxCheckList.displayName = 'FilterPagingCheckboxCheckList';

export default FilterPagingCheckboxCheckList;
