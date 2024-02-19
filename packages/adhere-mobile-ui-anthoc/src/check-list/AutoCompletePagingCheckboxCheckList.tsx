import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompletePagingCheckboxCheckListProps, DisplayNameInternal } from '../types';
import PagingCheckboxCheckList from './PagingCheckboxCheckList';

const InternalAutoCompletePagingCheckboxCheckList = memo<AutoCompletePagingCheckboxCheckListProps>(
  ({ pagingCheckboxCheckListProps, ...autoCompleteProps }) => (
    <AutoComplete labelProp="title" {...(autoCompleteProps ?? {})}>
      {({ value, onChange, searchDataSource }) => (
        <PagingCheckboxCheckList
          value={value}
          onChange={onChange}
          options={searchDataSource}
          {...(pagingCheckboxCheckListProps ?? {})}
        />
      )}
    </AutoComplete>
  ),
);

const AutoCompletePagingCheckboxCheckList =
  InternalAutoCompletePagingCheckboxCheckList as DisplayNameInternal<
    typeof InternalAutoCompletePagingCheckboxCheckList
  >;
AutoCompletePagingCheckboxCheckList.displayName = 'AutoCompletePagingCheckboxCheckList';

export default AutoCompletePagingCheckboxCheckList;
