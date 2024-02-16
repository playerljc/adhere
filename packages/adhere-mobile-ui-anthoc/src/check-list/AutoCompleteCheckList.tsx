import { List } from 'antd-mobile';
import React, { memo } from 'react';

import type { AutoCompleteCheckListProps, DisplayNameInternal } from '../types';
import useAutoComplete from '../useAutoComplete';
import CheckList from './CheckList';

const InternalAutoCompleteCheckList = memo<AutoCompleteCheckListProps>(
  ({ checkListProps, ...autoCompleteProps }) =>
    useAutoComplete(
      {
        renderResultItem: (record) => <List.Item {...record} />,
        ...autoCompleteProps,
      },
      ({ value, onChange, searchDataSource }) => (
        <CheckList
          value={value}
          onChange={onChange}
          options={searchDataSource}
          {...(checkListProps ?? {})}
        />
      ),
    ),
);

const AutoCompleteCheckList = InternalAutoCompleteCheckList as DisplayNameInternal<
  typeof InternalAutoCompleteCheckList
>;
AutoCompleteCheckList.displayName = 'AutoCompleteCheckList';

export default AutoCompleteCheckList;
