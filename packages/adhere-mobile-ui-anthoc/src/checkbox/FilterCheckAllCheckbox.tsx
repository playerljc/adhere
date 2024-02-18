import type { CheckboxProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import type { DisplayNameInternal, FilterCheckAllCheckboxProps } from '../types';
import CheckAllCheckbox from './CheckAllCheckbox';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-check-all-check-box';

const InternalFilterCheckAllCheckbox = memo<FilterCheckAllCheckboxProps>(
  ({
    className,
    style,
    filterProps,
    filterWrapperClassName,
    filterWrapperStyle,
    bodyWrapperClassName,
    bodyWrapperStyle,
    renderEmpty,
    ...checkAllCheckboxProps
  }) => (
    <ListFilter<CheckboxProps>
      options={checkAllCheckboxProps?.options ?? []}
      filterProps={filterProps}
      wrapperClassName={classNames(selectorPrefix, className ?? '')}
      wrapperStyle={style ?? {}}
      filterWrapperClassName={classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? '')}
      bodyWrapperClassName={classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? '')}
      filterWrapperStyle={filterWrapperStyle ?? {}}
      bodyWrapperStyle={bodyWrapperStyle ?? {}}
      renderEmpty={renderEmpty}
      children={(options) => <CheckAllCheckbox {...checkAllCheckboxProps} options={options} />}
    />
  ),
);

const FilterCheckAllCheckbox = InternalFilterCheckAllCheckbox as DisplayNameInternal<
  typeof InternalFilterCheckAllCheckbox
>;
FilterCheckAllCheckbox.displayName = 'FilterCheckAllCheckbox';

export default FilterCheckAllCheckbox;
