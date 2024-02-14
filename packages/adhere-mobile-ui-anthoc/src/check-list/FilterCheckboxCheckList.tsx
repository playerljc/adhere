import type { CheckListItemProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import type { DisplayNameInternal, FilterCheckboxCheckListProps } from '../types';
import useListFilter from '../useListFilter';
import CheckboxCheckList from './CheckboxCheckList';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-check-box-check-list';

const InternalFilterCheckboxCheckList = memo<FilterCheckboxCheckListProps>(
  ({
    className,
    style,
    filterWrapperClassName,
    filterWrapperStyle,
    bodyWrapperClassName,
    bodyWrapperStyle,
    filterProps,
    ...checkboxCheckListProps
  }) =>
    useListFilter<CheckListItemProps>({
      options: checkboxCheckListProps?.options ?? [],
      filterProps,
      wrapperClassName: classNames(selectorPrefix, className ?? ''),
      wrapperStyle: style,
      filterWrapperClassName: classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? ''),
      bodyWrapperClassName: classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? ''),
      filterWrapperStyle,
      bodyWrapperStyle,
      children: (options) => <CheckboxCheckList {...checkboxCheckListProps} options={options} />,
    }),
);

const FilterCheckboxCheckList = InternalFilterCheckboxCheckList as DisplayNameInternal<
  typeof InternalFilterCheckboxCheckList
>;
FilterCheckboxCheckList.displayName = 'FilterCheckboxCheckList';

export default FilterCheckboxCheckList;
