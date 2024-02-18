import { List } from 'antd-mobile';
import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompleteCheckboxCheckListProps, DisplayNameInternal } from '../types';
import CheckboxCheckList from './CheckboxCheckList';

const InternalAutoCompleteCheckboxCheckList = memo<AutoCompleteCheckboxCheckListProps>(
  ({ checkListProps, ...autoCompleteProps }) => (
    <AutoComplete
      autoCompleteProps={{
        renderResultItem: (record) => <List.Item {...record} />,
        ...(autoCompleteProps ?? {}),
      }}
    >
      {({ value, onChange, searchDataSource }) => (
        <CheckboxCheckList
          value={value}
          onChange={onChange}
          options={searchDataSource}
          {...(checkListProps ?? {})}
        />
      )}
    </AutoComplete>
  ),
);

const AutoCompleteCheckboxCheckList = InternalAutoCompleteCheckboxCheckList as DisplayNameInternal<
  typeof InternalAutoCompleteCheckboxCheckList
>;
AutoCompleteCheckboxCheckList.displayName = 'AutoCompleteCheckboxCheckList';

export default AutoCompleteCheckboxCheckList;
