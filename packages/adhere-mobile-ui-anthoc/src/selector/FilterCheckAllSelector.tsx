import type { SelectorOption } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import type { DisplayNameInternal, FilterCheckAllSelectorProps } from '../types';
import useListFilter from '../useListFilter';
import CheckAllSelector from './CheckAllSelector';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-check-all-selector';

const InternalFilterCheckAllSelector = memo<FilterCheckAllSelectorProps>(
  ({
    className,
    style,
    filterProps,
    filterWrapperClassName,
    filterWrapperStyle,
    bodyWrapperClassName,
    bodyWrapperStyle,
    selectorClassName,
    selectorStyle,
    ...checkAllSelectorProps
  }) =>
    useListFilter<SelectorOption<any>>({
      options: checkAllSelectorProps?.options ?? [],
      filterProps,
      wrapperClassName: classNames(selectorPrefix, className ?? ''),
      wrapperStyle: style,
      filterWrapperClassName: classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? ''),
      bodyWrapperClassName: classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? ''),
      filterWrapperStyle,
      bodyWrapperStyle,
      children: (options) => (
        <CheckAllSelector
          className={selectorClassName ?? ''}
          style={selectorStyle ?? {}}
          {...checkAllSelectorProps}
          options={options}
        />
      ),
    }),
);

const FilterCheckAllSelector = InternalFilterCheckAllSelector as DisplayNameInternal<
  typeof InternalFilterCheckAllSelector
>;
FilterCheckAllSelector.displayName = 'FilterCheckAllSelector';

export default FilterCheckAllSelector;
