import type { SelectorOption } from 'antd-mobile/es/components/selector';
import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import Paging from '../Paging';
import type { FilterPagingSelectorProps } from '../types';
import { DisplayNameInternal } from '../types';
import Selector from './Selector';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-paging-selector';

const InternalFilterPagingSelector = memo<FilterPagingSelectorProps>(
  ({
    className,
    style,
    filterWrapperClassName,
    filterWrapperStyle,
    bodyWrapperClassName,
    bodyWrapperStyle,
    renderEmpty,
    filterProps,
    pagingProps,
    options,
    ...selectorProps
  }) => (
    <ListFilter<SelectorOption<any>>
      options={options ?? []}
      filterProps={filterProps}
      wrapperClassName={classNames(selectorPrefix, className ?? '')}
      wrapperStyle={style ?? {}}
      filterWrapperClassName={classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? '')}
      bodyWrapperClassName={classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? '')}
      filterWrapperStyle={filterWrapperStyle ?? {}}
      bodyWrapperStyle={bodyWrapperStyle ?? {}}
      renderEmpty={renderEmpty}
      children={(_options) => (
        <Paging<SelectorOption<any>> options={_options} {...pagingProps} isLocal>
          <Selector {...selectorProps} />
        </Paging>
      )}
    />
  ),
);

const FilterPagingSelector = InternalFilterPagingSelector as DisplayNameInternal<
  typeof InternalFilterPagingSelector
>;
FilterPagingSelector.displayName = 'FilterPagingSelector';

export default FilterPagingSelector;
