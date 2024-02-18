import type { CheckListItemProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import type { DisplayNameInternal, FilterCheckboxCheckAllCheckListProps } from '../types';
import CheckboxCheckAllCheckList from './CheckboxCheckAllCheckList';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-check-box-check-all-check-list';

const InternalFilterCheckboxCheckAllCheckList = memo<FilterCheckboxCheckAllCheckListProps>(
  ({
    className,
    style,
    filterProps,
    filterWrapperClassName,
    filterWrapperStyle,
    bodyWrapperClassName,
    bodyWrapperStyle,
    renderEmpty,
    ...checkboxCheckListProps
  }) => (
    <ListFilter<CheckListItemProps>
      options={checkboxCheckListProps?.options ?? []}
      filterProps={filterProps}
      wrapperClassName={classNames(selectorPrefix, className ?? '')}
      wrapperStyle={style ?? {}}
      filterWrapperClassName={classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? '')}
      bodyWrapperClassName={classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? '')}
      filterWrapperStyle={filterWrapperStyle ?? {}}
      bodyWrapperStyle={bodyWrapperStyle ?? {}}
      renderEmpty={renderEmpty}
      children={(options) => (
        <CheckboxCheckAllCheckList {...checkboxCheckListProps} options={options} />
      )}
    />
  ),
);

const FilterCheckboxCheckAllCheckList =
  InternalFilterCheckboxCheckAllCheckList as DisplayNameInternal<
    typeof InternalFilterCheckboxCheckAllCheckList
  >;
FilterCheckboxCheckAllCheckList.displayName = 'FilterCheckboxCheckAllCheckList';

export default FilterCheckboxCheckAllCheckList;
