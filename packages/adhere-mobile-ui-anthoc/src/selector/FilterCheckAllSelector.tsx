import type { SelectorOption } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import type { DisplayNameInternal, FilterCheckAllSelectorProps } from '../types';
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
    renderEmpty,
    ...checkAllSelectorProps
  }) => (
    <ListFilter<SelectorOption<any>>
      options={checkAllSelectorProps?.options ?? []}
      filterProps={filterProps}
      wrapperClassName={classNames(selectorPrefix, className ?? '')}
      wrapperStyle={style ?? {}}
      filterWrapperClassName={classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? '')}
      bodyWrapperClassName={classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? '')}
      filterWrapperStyle={filterWrapperStyle ?? {}}
      bodyWrapperStyle={bodyWrapperStyle ?? {}}
      renderEmpty={renderEmpty}
      children={(options) => (
        <CheckAllSelector
          className={selectorClassName ?? ''}
          style={selectorStyle ?? {}}
          {...checkAllSelectorProps}
          options={options}
        />
      )}
    />
  ),
);

const FilterCheckAllSelector = InternalFilterCheckAllSelector as DisplayNameInternal<
  typeof InternalFilterCheckAllSelector
>;
FilterCheckAllSelector.displayName = 'FilterCheckAllSelector';

export default FilterCheckAllSelector;
