import type { CheckboxProps as AntMobileCheckboxProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import type { DisplayNameInternal, FilterCheckboxProps } from '../types';
import useListFilter from '../useListFilter';
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
    ...checkboxGroupProps
  }) =>
    useListFilter<AntMobileCheckboxProps>({
      options: checkboxGroupProps?.options ?? [],
      filterProps,
      wrapperClassName: classNames(selectorPrefix, className ?? ''),
      wrapperStyle: style,
      filterWrapperClassName: classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? ''),
      bodyWrapperClassName: classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? ''),
      filterWrapperStyle,
      bodyWrapperStyle,
      children: (options) => <CheckboxGroup {...checkboxGroupProps} options={options} />,
    }),
);

const FilterCheckBox = InternalFilterCheckBox as DisplayNameInternal<typeof InternalFilterCheckBox>;
FilterCheckBox.displayName = 'FilterCheckBox';

export default FilterCheckBox;
