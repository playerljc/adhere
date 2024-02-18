import type { SelectorOption } from 'antd-mobile/es/components/selector';
import React, { memo } from 'react';

import StaticPaging from '../StaticPaging';
import type { DisplayNameInternal, PagingSelectorProps } from '../types';
import Selector from './Selector';

const InternalPagingSelector = memo<PagingSelectorProps>(
  ({ options, pagingProps, ...selectorProps }) => (
    <StaticPaging<SelectorOption<any>> options={options} {...pagingProps}>
      <Selector {...selectorProps} />
    </StaticPaging>
  ),
);

const PagingSelector = InternalPagingSelector as DisplayNameInternal<typeof InternalPagingSelector>;
PagingSelector.displayName = 'PagingSelector';

export default PagingSelector;
