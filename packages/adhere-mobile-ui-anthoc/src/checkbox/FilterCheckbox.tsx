import type { CheckboxProps as AntMobileCheckboxProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import type { DisplayNameInternal, FilterCheckboxProps } from '../types';
import CheckboxGroup from './CheckboxGroup';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-check-box';

const InternalFilterCheckBox = memo<FilterCheckboxProps>(
  ({
    className,
    style,
    filterProps,
    filterWrapperClassName,
    filterWrapperStyle,
    bodyWrapperClassName,
    bodyWrapperStyle,
    renderEmpty,
    ...checkboxGroupProps
  }) => (
    <ListFilter<AntMobileCheckboxProps>
      options={checkboxGroupProps?.options ?? []}
      filterProps={filterProps}
      wrapperClassName={classNames(selectorPrefix, className ?? '')}
      wrapperStyle={style ?? {}}
      filterWrapperClassName={classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? '')}
      bodyWrapperClassName={classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? '')}
      filterWrapperStyle={filterWrapperStyle ?? {}}
      bodyWrapperStyle={bodyWrapperStyle ?? {}}
      renderEmpty={renderEmpty}
      children={(options) => <CheckboxGroup {...checkboxGroupProps} options={options} />}
    />
  ),
);

const FilterCheckBox = InternalFilterCheckBox as DisplayNameInternal<typeof InternalFilterCheckBox>;
FilterCheckBox.displayName = 'FilterCheckBox';

export default FilterCheckBox;
