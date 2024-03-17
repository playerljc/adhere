import type { SelectorOption } from 'antd-mobile/es/components/selector';
import React, { memo } from 'react';

import Paging from '../Paging';
import type { DisplayNameInternal, PagingSelectorProps } from '../types';
import Selector from './Selector';

const InternalPagingSelector = memo<PagingSelectorProps>(
  ({ options, pagingProps, ...selectorProps }) => {
    return (
      <Paging<SelectorOption<any>> options={options} {...pagingProps}>
        <Selector {...selectorProps} />
      </Paging>
    );
  },
);

const PagingSelector = InternalPagingSelector as DisplayNameInternal<typeof InternalPagingSelector>;
PagingSelector.displayName = 'PagingSelector';

export default PagingSelector;
