import type { CheckListItemProps } from 'antd-mobile';
import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompletePagingCheckboxCheckListProps, DisplayNameInternal } from '../types';
import useAutoCompletePaging from '../useAutoCompletePaging';
import PagingCheckboxCheckList from './PagingCheckboxCheckList';

const InternalAutoCompletePagingCheckboxCheckList = memo<AutoCompletePagingCheckboxCheckListProps>(
  ({ pagingCheckboxCheckListProps, loadData, onDataSourceChange, ...autoCompleteProps }) => {
    const { searchDataSource, targetPagingComponentProps, autoCompleteLoadData } =
      useAutoCompletePaging<CheckListItemProps>({
        defaultSearchDataSource: autoCompleteProps.searchDataSource,
        pagingComponentProps: pagingCheckboxCheckListProps,
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
          <PagingCheckboxCheckList
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

const AutoCompletePagingCheckboxCheckList =
  InternalAutoCompletePagingCheckboxCheckList as DisplayNameInternal<
    typeof InternalAutoCompletePagingCheckboxCheckList
  >;
AutoCompletePagingCheckboxCheckList.displayName = 'AutoCompletePagingCheckboxCheckList';

export default AutoCompletePagingCheckboxCheckList;
