import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import {
  AntMobileCheckboxItem,
  AutoCompletePagingCheckboxProps,
  DisplayNameInternal,
} from '../types';
import useAutoCompletePaging from '../useAutoCompletePaging';
import PagingCheckbox from './PagingCheckbox';

const InternalAutoCompletePagingCheckbox = memo<AutoCompletePagingCheckboxProps>(
  ({ pagingCheckboxProps, loadData, onDataSourceChange, ...autoCompleteProps }) => {
    const { searchDataSource, targetPagingComponentProps, autoCompleteLoadData } =
      useAutoCompletePaging<AntMobileCheckboxItem>({
        defaultSearchDataSource: autoCompleteProps.searchDataSource,
        pagingComponentProps: pagingCheckboxProps,
        loadData,
        onDataSourceChange,
      });

    return (
      <AutoComplete
        labelProp="title"
        {...(autoCompleteProps ?? {})}
        searchDataSource={searchDataSource.data}
        loadData={autoCompleteLoadData}
      >
        {({ value, onChange, searchDataSource }) => (
          <PagingCheckbox
            value={value}
            onChange={onChange}
            options={searchDataSource}
            {...(targetPagingComponentProps ?? {})}
          />
        )}
      </AutoComplete>
    );
  },
);

const AutoCompletePagingCheckbox = InternalAutoCompletePagingCheckbox as DisplayNameInternal<
  typeof InternalAutoCompletePagingCheckbox
>;
AutoCompletePagingCheckbox.displayName = 'AutoCompletePagingCheckbox';

export default AutoCompletePagingCheckbox;
