import type { CheckListItemProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import type { FilterCheckListProps } from '../types';
import { DisplayNameInternal } from '../types';
import CheckList from './CheckList';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-check-list';

const InternalFilterCheckList = memo<FilterCheckListProps>(
  ({
    className,
    style,
    filterWrapperClassName,
    filterWrapperStyle,
    bodyWrapperClassName,
    bodyWrapperStyle,
    filterProps,
    renderEmpty,
    ...checkListProps
  }) => (
    <ListFilter<CheckListItemProps>
      options={checkListProps?.options ?? []}
      filterProps={filterProps}
      wrapperClassName={classNames(selectorPrefix, className ?? '')}
      wrapperStyle={style ?? {}}
      filterWrapperClassName={classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? '')}
      bodyWrapperClassName={classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? '')}
      filterWrapperStyle={filterWrapperStyle ?? {}}
      bodyWrapperStyle={bodyWrapperStyle ?? {}}
      renderEmpty={renderEmpty}
      children={(options) => <CheckList {...checkListProps} options={options} />}
    />
  ),
);

const FilterCheckList = InternalFilterCheckList as DisplayNameInternal<
  typeof InternalFilterCheckList
>;
FilterCheckList.displayName = 'FilterCheckList';

export default FilterCheckList;
