import { List } from 'antd-mobile';
import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompleteCheckListProps, DisplayNameInternal } from '../types';
import CheckList from './CheckList';

const InternalAutoCompleteCheckList = memo<AutoCompleteCheckListProps>(
  ({ checkListProps, ...autoCompleteProps }) => (
    <AutoComplete
      autoCompleteProps={{
        renderResultItem: (record) => <List.Item {...record} />,
        ...(autoCompleteProps ?? {}),
      }}
    >
      {({ value, onChange, searchDataSource }) => (
        <CheckList
          value={value}
          onChange={onChange}
          options={searchDataSource}
          {...(checkListProps ?? {})}
        />
      )}
    </AutoComplete>
  ),
);

const AutoCompleteCheckList = InternalAutoCompleteCheckList as DisplayNameInternal<
  typeof InternalAutoCompleteCheckList
>;
AutoCompleteCheckList.displayName = 'AutoCompleteCheckList';

export default AutoCompleteCheckList;
