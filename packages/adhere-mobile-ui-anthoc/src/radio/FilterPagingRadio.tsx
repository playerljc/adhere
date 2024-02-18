import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import StaticPaging from '../StaticPaging';
import type { AntMobileRadioItem, FilterPagingRadioProps } from '../types';
import { DisplayNameInternal } from '../types';
import RadioGroup from './RadioGroup';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-paging-radio';

const InternalFilterPagingRadio = memo<FilterPagingRadioProps>(
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
    ...radioGroupProps
  }) => (
    <ListFilter<AntMobileRadioItem>
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
        <StaticPaging<AntMobileRadioItem> options={_options} {...pagingProps}>
          <RadioGroup {...radioGroupProps} />
        </StaticPaging>
      )}
    />
  ),
);

const FilterPagingRadio = InternalFilterPagingRadio as DisplayNameInternal<
  typeof InternalFilterPagingRadio
>;
FilterPagingRadio.displayName = 'FilterPagingRadio';

export default FilterPagingRadio;
