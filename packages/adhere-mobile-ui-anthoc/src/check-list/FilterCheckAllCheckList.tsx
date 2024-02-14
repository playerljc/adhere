import type { CheckListItemProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import type { DisplayNameInternal, FilterCheckAllCheckListProps } from '../types';
import useListFilter from '../useListFilter';
import CheckAllCheckList from './CheckAllCheckList';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-check-all-check-list';

const InternalFilterCheckAllCheckList = memo<FilterCheckAllCheckListProps>(
  ({
    className,
    style,
    filterProps,
    filterWrapperClassName,
    filterWrapperStyle,
    bodyWrapperClassName,
    bodyWrapperStyle,
    checkListClassName,
    checkListStyle,
    ...checkAllCheckListProps
  }) =>
    useListFilter<CheckListItemProps>({
      options: checkAllCheckListProps?.options ?? [],
      filterProps,
      wrapperClassName: classNames(selectorPrefix, className ?? ''),
      wrapperStyle: style,
      filterWrapperClassName: classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? ''),
      bodyWrapperClassName: classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? ''),
      filterWrapperStyle,
      bodyWrapperStyle,
      children: (options) => (
        <CheckAllCheckList
          className={checkListClassName ?? ''}
          style={checkListStyle ?? {}}
          {...checkAllCheckListProps}
          options={options}
        />
      ),
    }),
);

const FilterCheckAllCheckList = InternalFilterCheckAllCheckList as DisplayNameInternal<
  typeof InternalFilterCheckAllCheckList
>;
FilterCheckAllCheckList.displayName = 'FilterCheckAllCheckList';

export default FilterCheckAllCheckList;
