import type { RadioValue } from 'antd-mobile/es/components/radio';
import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import { AntMobileRadioItem, AutoCompletePagingRadioProps, DisplayNameInternal } from '../types';
import useAutoCompletePaging from '../useAutoCompletePaging';
import PagingRadio from './PagingRadio';

const InternalAutoCompletePagingRadio = memo<AutoCompletePagingRadioProps>(
  ({ pagingRadioProps, loadData, onDataSourceChange, ...autoCompleteProps }) => {
    const { searchDataSource, targetPagingComponentProps, autoCompleteLoadData } =
      useAutoCompletePaging<AntMobileRadioItem>({
        defaultSearchDataSource: autoCompleteProps.searchDataSource,
        pagingComponentProps: pagingRadioProps,
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
          <PagingRadio
            value={value && value.length ? (value[0] as RadioValue) : null}
            onChange={(_value) => {
              onChange?.([_value]);
            }}
            options={searchDataSource}
            {...(targetPagingComponentProps ?? {})}
          />
        )}
      </AutoComplete>
    );
  },
);

const AutoCompletePagingRadio = InternalAutoCompletePagingRadio as DisplayNameInternal<
  typeof InternalAutoCompletePagingRadio
>;
AutoCompletePagingRadio.displayName = 'AutoCompletePagingRadio';

export default AutoCompletePagingRadio;
