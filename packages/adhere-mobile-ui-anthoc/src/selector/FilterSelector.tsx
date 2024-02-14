import type { SelectorOption } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import type { DisplayNameInternal, FilterSelectorProps } from '../types';
import useListFilter from '../useListFilter';
import Selector from './Selector';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-selector';

const InternalFilterSelector = memo<FilterSelectorProps>(
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
    ...selectorProps
  }) =>
    useListFilter<SelectorOption<any>>({
      options: selectorProps?.options ?? [],
      filterProps,
      wrapperClassName: classNames(selectorPrefix, className ?? ''),
      wrapperStyle: style,
      filterWrapperClassName: classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? ''),
      bodyWrapperClassName: classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? ''),
      filterWrapperStyle,
      bodyWrapperStyle,
      children: (options) => (
        <Selector
          className={selectorClassName ?? ''}
          style={selectorStyle ?? {}}
          {...selectorProps}
          options={options}
        />
      ),
    }),
);

const FilterSelector = InternalFilterSelector as DisplayNameInternal<typeof InternalFilterSelector>;
FilterSelector.displayName = 'FilterSelector';

export default FilterSelector;
