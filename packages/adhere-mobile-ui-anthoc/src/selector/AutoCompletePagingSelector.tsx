import type { CheckListItemProps } from 'antd-mobile';
import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompletePagingSelectorProps, DisplayNameInternal } from '../types';
import useAutoCompletePaging from '../useAutoCompletePaging';
import PagingSelector from './PagingSelector';

const InternalAutoCompletePagingSelector = memo<AutoCompletePagingSelectorProps>(
  ({ pagingSelectorProps, loadData, onDataSourceChange, ...autoCompleteProps }) => {
    const { searchDataSource, targetPagingComponentProps, autoCompleteLoadData } =
      useAutoCompletePaging<CheckListItemProps>({
        defaultSearchDataSource: autoCompleteProps.searchDataSource,
        pagingComponentProps: pagingSelectorProps,
        loadData,
        onDataSourceChange,
      });

    return (
      <AutoComplete
        {...(autoCompleteProps ?? {})}
        searchDataSource={searchDataSource.data}
        loadData={autoCompleteLoadData}
      >
        {({ value, onChange, searchDataSource }) => (
          <PagingSelector
            value={value}
            onChange={onChange}
            options={searchDataSource as any[]}
            {...(targetPagingComponentProps ?? {})}
          />
        )}
      </AutoComplete>
    );
  },
);

const AutoCompletePagingSelector = InternalAutoCompletePagingSelector as DisplayNameInternal<
  typeof InternalAutoCompletePagingSelector
>;
AutoCompletePagingSelector.displayName = 'AutoCompletePagingSelector';

export default AutoCompletePagingSelector;
