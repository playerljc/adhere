import type { CheckListItemProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import type { DisplayNameInternal, FilterCheckboxCheckListProps } from '../types';
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
      children={(options) => <CheckboxCheckList {...checkboxCheckListProps} options={options} />}
    />
  ),
);

const FilterCheckboxCheckList = InternalFilterCheckboxCheckList as DisplayNameInternal<
  typeof InternalFilterCheckboxCheckList
>;
FilterCheckboxCheckList.displayName = 'FilterCheckboxCheckList';

export default FilterCheckboxCheckList;
