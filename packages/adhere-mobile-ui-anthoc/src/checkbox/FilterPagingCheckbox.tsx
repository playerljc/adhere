import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import Paging from '../Paging';
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
          <Paging<AntMobileCheckboxItem> options={_options} {...pagingProps} isLocal>
            <CheckboxGroup {...checkboxGroupProps} />
          </Paging>
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
