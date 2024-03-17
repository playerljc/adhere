import type { CheckListItemProps } from 'antd-mobile';
import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompletePagingCheckListProps, DisplayNameInternal } from '../types';
import useAutoCompletePaging from '../useAutoCompletePaging';
import PagingCheckList from './PagingCheckList';

const InternalAutoCompletePagingCheckList = memo<AutoCompletePagingCheckListProps>(
  ({ pagingCheckListProps, loadData, onDataSourceChange, ...autoCompleteProps }) => {
    const { searchDataSource, targetPagingComponentProps, autoCompleteLoadData } =
      useAutoCompletePaging<CheckListItemProps>({
        defaultSearchDataSource: autoCompleteProps.searchDataSource,
        pagingComponentProps: pagingCheckListProps,
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
          <PagingCheckList
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

const AutoCompletePagingCheckList = InternalAutoCompletePagingCheckList as DisplayNameInternal<
  typeof InternalAutoCompletePagingCheckList
>;
AutoCompletePagingCheckList.displayName = 'AutoCompletePagingCheckList';

export default AutoCompletePagingCheckList;
