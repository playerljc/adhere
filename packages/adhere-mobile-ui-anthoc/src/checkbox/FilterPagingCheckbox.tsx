import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import StaticPaging from '../StaticPaging';
import type { AntMobileCheckboxItem, FilterPagingCheckboxProps } from '../types';
import { DisplayNameInternal } from '../types';
import CheckboxGroup from './CheckboxGroup';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-paging-check-box';

const InternalFilterPagingCheckbox = memo<FilterPagingCheckboxProps>(
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
    ...checkboxGroupProps
  }) => {
    return (
      <ListFilter<AntMobileCheckboxItem>
        options={options ?? []}
        filterProps={filterProps}
        wrapperClassName={classNames(selectorPrefix, className ?? '')}
        wrapperStyle={style ?? {}}
        filterWrapperClassName={classNames(
          `${selectorPrefix}-filter`,
          filterWrapperClassName ?? '',
        )}
        bodyWrapperClassName={classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? '')}
        filterWrapperStyle={filterWrapperStyle ?? {}}
        bodyWrapperStyle={bodyWrapperStyle ?? {}}
        renderEmpty={renderEmpty}
        children={(_options) => (
          <StaticPaging<AntMobileCheckboxItem> options={_options} {...pagingProps}>
            <CheckboxGroup {...checkboxGroupProps} />
          </StaticPaging>
        )}
      />
    );
  },
);

const FilterPagingCheckbox = InternalFilterPagingCheckbox as DisplayNameInternal<
  typeof InternalFilterPagingCheckbox
>;
FilterPagingCheckbox.displayName = 'FilterPagingCheckbox';

export default FilterPagingCheckbox;
