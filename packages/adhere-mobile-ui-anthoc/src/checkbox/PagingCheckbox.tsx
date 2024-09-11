import React, { memo } from 'react';

import Paging from '../Paging';
import type { AntMobileCheckboxItem, DisplayNameInternal, PagingCheckboxProps } from '../types';
import CheckboxGroup from './CheckboxGroup';

const InternalPagingCheckbox = memo<PagingCheckboxProps>(
  ({ options, pagingProps, ...checkboxGroupProps }) => (
    <Paging<AntMobileCheckboxItem> options={options} {...pagingProps}>
      <CheckboxGroup {...checkboxGroupProps} />
    </Paging>
  ),
);

const PagingCheckbox = InternalPagingCheckbox as DisplayNameInternal<typeof InternalPagingCheckbox>;
PagingCheckbox.displayName = 'PagingCheckbox';

export default PagingCheckbox;
