import React, { memo } from 'react';

import StaticPaging from '../StaticPaging';
import type { AntMobileRadioItem, DisplayNameInternal, PagingRadioProps } from '../types';
import RadioGroup from './RadioGroup';

const InternalPagingRadio = memo<PagingRadioProps>(
  ({ options, pagingProps, ...radioGroupProps }) => (
    <StaticPaging<AntMobileRadioItem> options={options} {...pagingProps}>
      <RadioGroup {...radioGroupProps} />
    </StaticPaging>
  ),
);

const PagingRadio = InternalPagingRadio as DisplayNameInternal<typeof InternalPagingRadio>;
PagingRadio.displayName = 'PagingRadio';

export default PagingRadio;
