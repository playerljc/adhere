import React, { memo } from 'react';

import Paging from '../Paging';
import type { AntMobileRadioItem, DisplayNameInternal, PagingRadioProps } from '../types';
import RadioGroup from './RadioGroup';

const InternalPagingRadio = memo<PagingRadioProps>(
  ({ options, pagingProps, ...radioGroupProps }) => (
    <Paging<AntMobileRadioItem> options={options} {...pagingProps}>
      <RadioGroup {...radioGroupProps} />
    </Paging>
  ),
);

const PagingRadio = InternalPagingRadio as DisplayNameInternal<typeof InternalPagingRadio>;
PagingRadio.displayName = 'PagingRadio';

export default PagingRadio;
