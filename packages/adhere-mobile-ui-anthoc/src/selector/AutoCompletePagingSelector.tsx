import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompletePagingSelectorProps, DisplayNameInternal } from '../types';
import PagingSelector from './PagingSelector';

const InternalAutoCompletePagingSelector = memo<AutoCompletePagingSelectorProps>(
  ({ pagingSelectorProps, ...autoCompleteProps }) => (
    <AutoComplete {...(autoCompleteProps ?? {})}>
      {({ value, onChange, searchDataSource }) => (
        <PagingSelector
          value={value}
          onChange={onChange}
          options={searchDataSource as any[]}
          {...(pagingSelectorProps ?? {})}
        />
      )}
    </AutoComplete>
  ),
);

const AutoCompletePagingSelector = InternalAutoCompletePagingSelector as DisplayNameInternal<
  typeof InternalAutoCompletePagingSelector
>;
AutoCompletePagingSelector.displayName = 'AutoCompletePagingSelector';

export default AutoCompletePagingSelector;
