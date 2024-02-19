import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompletePagingCheckListProps, DisplayNameInternal } from '../types';
import PagingCheckList from './PagingCheckList';

const InternalAutoCompletePagingCheckList = memo<AutoCompletePagingCheckListProps>(
  ({ pagingCheckListProps, ...autoCompleteProps }) => (
    <AutoComplete labelProp="title" {...(autoCompleteProps ?? {})}>
      {({ value, onChange, searchDataSource }) => (
        <PagingCheckList
          value={value}
          onChange={onChange}
          options={searchDataSource}
          {...(pagingCheckListProps ?? {})}
        />
      )}
    </AutoComplete>
  ),
);

const AutoCompletePagingCheckList = InternalAutoCompletePagingCheckList as DisplayNameInternal<
  typeof InternalAutoCompletePagingCheckList
>;
AutoCompletePagingCheckList.displayName = 'AutoCompletePagingCheckList';

export default AutoCompletePagingCheckList;
