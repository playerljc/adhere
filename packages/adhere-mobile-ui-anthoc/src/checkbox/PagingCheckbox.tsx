import React, { memo } from 'react';

import StaticPaging from '../StaticPaging';
import type { AntMobileCheckboxItem, DisplayNameInternal, PagingCheckboxProps } from '../types';
import CheckboxGroup from './CheckboxGroup';

const InternalPagingCheckbox = memo<PagingCheckboxProps>(
  ({ options, pagingProps, ...checkboxGroupProps }) => (
    <StaticPaging<AntMobileCheckboxItem> options={options} {...pagingProps}>
      <CheckboxGroup {...checkboxGroupProps} />
    </StaticPaging>
  ),
);

const PagingCheckbox = InternalPagingCheckbox as DisplayNameInternal<typeof InternalPagingCheckbox>;
PagingCheckbox.displayName = 'PagingCheckbox';

export default PagingCheckbox;
