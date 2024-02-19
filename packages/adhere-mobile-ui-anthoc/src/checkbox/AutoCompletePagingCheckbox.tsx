import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompletePagingCheckboxProps, DisplayNameInternal } from '../types';
import PagingCheckbox from './PagingCheckbox';

const InternalAutoCompletePagingCheckbox = memo<AutoCompletePagingCheckboxProps>(
  ({ pagingCheckboxProps, ...autoCompleteProps }) => (
    <AutoComplete labelProp="title" {...(autoCompleteProps ?? {})}>
      {({ value, onChange, searchDataSource }) => (
        <PagingCheckbox
          value={value}
          onChange={onChange}
          options={searchDataSource}
          {...(pagingCheckboxProps ?? {})}
        />
      )}
    </AutoComplete>
  ),
);

const AutoCompletePagingCheckbox = InternalAutoCompletePagingCheckbox as DisplayNameInternal<
  typeof InternalAutoCompletePagingCheckbox
>;
AutoCompletePagingCheckbox.displayName = 'AutoCompletePagingCheckbox';

export default AutoCompletePagingCheckbox;
